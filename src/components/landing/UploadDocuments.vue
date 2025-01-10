<template>
  <div class="p-8 w-full">
    <div class="p-6 bg-white shadow-md">
      <h2 class="2xl:text-2xl 4xl:text-4xl font-bold mb-4 text-lg">Upload Your Documents</h2>

      <!-- Error/Success Messages -->
      <div v-if="errorMessage" class="mb-4 p-4 bg-red-100 text-red-700 rounded">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" class="mb-4 p-4 bg-green-100 text-green-700 rounded">
        {{ successMessage }}
      </div>

      <form @submit.prevent="handleSubmit" class="2xl:text-lg 4xl:text-2xl">
        <div class="mb-4">
          <label class="block text-sm 2xl:text-lg 4xl:text-3xl font-medium mb-2">Select Country</label>
          <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a country"
            class="w-full" :class="{ 'p-invalid': submitted && !selectedCountry }" />
          <small v-if="submitted && !selectedCountry" class="text-red-500">Country is required</small>
        </div>

        <div class="mb-4">
          <label class="block text-sm 2xl:text-lg 4xl:text-3xl font-medium mb-2">Select Process</label>
          <Dropdown v-model="selectedProcess" :options="processes" optionLabel="name" placeholder="Select a process"
            class="w-full" :class="{ 'p-invalid': submitted && !selectedProcess }" />
          <small v-if="submitted && !selectedProcess" class="text-red-500">Process is required</small>
        </div>

        <div class="mb-4" v-if="showSpotPriceOption">
          <div class="flex items-center">
            <Checkbox v-model="spotPrice" binary inputId="spot-price" />
            <label for="spot-price" class="ml-2 text-sm 2xl:text-lg 4xl:text-3xl">Use Internet Spot Price</label>
          </div>
          <div v-if="spotPrice" class="mt-2">
            <label class="block text-sm 2xl:text-lg 4xl:text-3xl font-medium mb-2">Select Platform</label>
            <Dropdown v-model="selectedPlatform" :options="platforms" optionLabel="name" placeholder="Select a platform"
              class="w-full" :class="{ 'p-invalid': submitted && spotPrice && !selectedPlatform }" />
            <small v-if="submitted && spotPrice && !selectedPlatform" class="text-red-500">
              Platform is required when using spot price
            </small>
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-sm 2xl:text-lg 4xl:text-3xl font-medium mb-2">Accounting Options</label>
          <div class="flex flex-col gap-2">
            <div v-for="option in accountingOptions" :key="option.value">
              <RadioButton v-model="selectedAccounting" :value="option.value" :inputId="option.value" />
              <label :for="option.value" class="2xl:text-base 4xl:text-2xl ml-2 text-sm">{{ option.name }}</label>
            </div>
          </div>
          <small v-if="submitted && !selectedAccounting" class="text-red-500">
            Accounting method is required
          </small>
        </div>

        <FileUpload ref="fileUpload" mode="advanced" :multiple="true" :accept="acceptedFileTypes"
          :maxFileSize="50000000" @select="onFileSelect" @remove="onFileRemove" :auto="true" chooseLabel="Select Files"
          class="w-full" :class="{ 'p-invalid': submitted && !hasRequiredFiles }">
          <template #empty>
            <div class="flex flex-col items-center justify-center p-6">
              <i class="pi pi-cloud-upload text-4xl mb-4"></i>
              <p class="2xl:text-xl 4xl:text-3xl text-gray-500">Drag and drop files here or click to upload</p>
            </div>
          </template>
        </FileUpload>
        <small v-if="submitted && !hasRequiredFiles" class="text-red-500 block mt-2">
          Required files are missing
        </small>

        <div v-if="processing" class="mt-4">
          <ProgressBar mode="indeterminate" class="mb-2" />
          <p class="text-sm text-gray-600">Processing files... Please wait.</p>
        </div>

        <div v-if="downloadUrl" class="mt-4">
          <Button type="button" @click="downloadResults" icon="pi pi-download" label="Download Results"
            class="p-button-success" />
        </div>

        <div class="flex justify-end mt-4">
          <Button type="submit" :loading="processing" :disabled="processing" label="Process Files"
            class="p-button-primary 2xl:text-lg 4xl:text-3xl" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar';

const COMMON_REQUIRED_FILES = ['.ini', '_in.csv', '_out.csv', '_intra.csv'];
const VALID_EXTENSIONS = {
  DALI: {
    required: COMMON_REQUIRED_FILES,
    optional: ['.xlsx', '.ods']
  },
  RP2: {
    required: ['_data.ini', '_data.csv'],
    optional: ['.ods']
  },
  'DALI + RP2': {
    required: COMMON_REQUIRED_FILES,
    optional: ['.xlsx', '.ods']
  }
};

export default {
  name: 'FileUploadComponent',

  components: {
    Dropdown,
    Checkbox,
    RadioButton,
    FileUpload,
    Button,
    ProgressBar
  },

  data() {
    return {
      selectedCountry: '',
      selectedProcess: '',
      spotPrice: false,
      selectedPlatform: '',
      selectedAccounting: '',
      uploadedFiles: [],
      submitted: false,
      processing: false,
      errorMessage: '',
      successMessage: '',
      downloadUrl: '',

      countries: [
        { name: 'Japan', value: 'Japan' },
        { name: 'Europe', value: 'Europe' },
        { name: 'US', value: 'US' },
        { name: 'Spain', value: 'Spain' },
        { name: 'Generic', value: 'Generic' }
      ],
      processes: [
        { name: 'DALI', value: 'DALI' },
        { name: 'RP2', value: 'RP2' },
        { name: 'DALI + RP2', value: 'DALI + RP2' }
      ],
      platforms: [
        { name: 'Binance', value: 'binance' },
        { name: 'Binance US', value: 'binanceus' },
        { name: 'Coinbase', value: 'coinbase' },
        { name: 'Kraken', value: 'kraken' }
      ],
      accountingOptions: [
        { name: 'FIFO (First In, First Out)', value: 'FIFO' },
        { name: 'LIFO (Last In, First Out)', value: 'LIFO' },
        { name: 'HIFO (Highest In, First Out)', value: 'HIFO' },
        { name: 'LOFO (Lowest In, First Out)', value: 'LOFO' }
      ]
    };
  },

  computed: {
    showSpotPriceOption() {
      return this.selectedProcess?.value === 'DALI' ||
        this.selectedProcess?.value === 'DALI + RP2';
    },

    acceptedFileTypes() {
      return '.csv,.xlsx,.ods,.ini';
    },
    hasRequiredFiles() {
      if (!this.selectedProcess) return true;
      const process = this.selectedProcess.value;
      const required = VALID_EXTENSIONS[process]?.required || [];

      return required.every(requiredExt =>
        this.uploadedFiles.some(file => {
          const fileName = file.name.toLowerCase();
          return fileName.endsWith(requiredExt.toLowerCase());
        })
      );
    }
  },

  methods: {
    onFileSelect(event) {
      this.uploadedFiles.push(...event.files);
      this.validateFiles();
    },

    onFileRemove(event) {
      const index = this.uploadedFiles.findIndex(file => file.name === event.file.name);
      if (index !== -1) {
        this.uploadedFiles.splice(index, 1);
      }
      this.validateFiles();
    },

    validateFiles() {
      if (!this.selectedProcess) return;

      const process = this.selectedProcess.value;
      const validExtensions = VALID_EXTENSIONS[process];

      if (!validExtensions) {
        this.errorMessage = 'Invalid process selected';
        return false;
      }

      const fileNames = this.uploadedFiles.map(f => f.name.toLowerCase());
      const missingFiles = validExtensions.required.filter(ext =>
        !fileNames.some(name => name.endsWith(ext.toLowerCase()))
      );

      if (missingFiles.length > 0) {
        this.errorMessage = `Missing required files: ${missingFiles.join(', ')}`;
        return false;
      }

      this.errorMessage = '';
      return true;
    },

    async handleSubmit() {
      this.submitted = true;
      this.errorMessage = '';
      this.successMessage = '';

      if (!this.selectedCountry ||
        !this.selectedProcess ||
        !this.selectedAccounting ||
        !this.hasRequiredFiles ||
        (this.spotPrice && !this.selectedPlatform)) {
        this.errorMessage = 'Please fill in all required fields and upload required files';
        return;
      }

      if (!this.validateFiles()) {
        return;
      }

      this.processing = true;

      try {
        const formData = new FormData();
        formData.append('country', this.selectedCountry);
        formData.append('process', this.selectedProcess);
        formData.append('accounting', this.selectedAccounting);

        if (this.showSpotPriceOption) {
          formData.append('spot_price', this.spotPrice.toString());
          if (this.spotPrice) {
            formData.append('platform', this.selectedPlatform.value);
          }
        }

        this.uploadedFiles.forEach(file => {
          formData.append('files', file);
        });

        const response = await fetch('http://localhost:8000/api/process', {
          method: 'POST',
          body: formData,
          mode: 'cors'
        });

        if (!response.ok) {
          throw new Error(await response.text());
        }

        const result = await response.json();

        if (result.status === 'success') {
          this.successMessage = 'Processing completed successfully';
          if (result.download_url) {
            this.downloadUrl = result.download_url;
          }
        } else {
          throw new Error(result.message || 'Processing failed');
        }
      } catch (error) {
        this.errorMessage = error.message;
      } finally {
        this.processing = false;
      }
    },

    async downloadResults() {
      if (!this.downloadUrl) return;

      try {
        const response = await fetch(`http://localhost:8000${this.downloadUrl}`);
        if (!response.ok) throw new Error('Download failed');

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'results.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        this.successMessage = 'Download complete';
      } catch (error) {
        this.errorMessage = 'Failed to download: ' + error.message;
      }
    },

    resetForm() {
      this.selectedCountry = '';
      this.selectedProcess = '';
      this.spotPrice = false;
      this.selectedPlatform = '';
      this.selectedAccounting = '';
      this.uploadedFiles = [];
      this.submitted = false;
      this.errorMessage = '';
      this.successMessage = '';
      this.downloadUrl = '';
      if (this.$refs.fileUpload) {
        this.$refs.fileUpload.clear();
      }
    }
  },

  watch: {
    selectedProcess() {
      this.validateFiles();
      if (!this.showSpotPriceOption) {
        this.spotPrice = false;
        this.selectedPlatform = '';
      }
    }
  }
};
</script>