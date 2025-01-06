<template>
  <div class="p-8 h-screen w-max">
    <div class="p-6 bg-white shadow-md mx-auto relative rounded-xl w-[75rem]">
      <h2 class="text-lg font-bold mb-4">Upload Your Documents</h2>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Select Country</label>
        <Dropdown
          v-model="selectedCountry"
          :options="countries"
          optionLabel="name"
          placeholder="Select a country"
          class="w-full"
        />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Select Process</label>
        <Dropdown
          v-model="selectedProcess"
          :options="processes"
          optionLabel="name"
          placeholder="Select a process"
          class="w-full"
        />
      </div>
      <div class="mb-4">
        <div class="flex items-center">
          <Checkbox v-model="spotPrice" binary inputId="spot-price" />
          <label for="spot-price" class="ml-2 text-sm">Spot Price</label>
        </div>
        <div v-if="spotPrice" class="mt-2">
          <label class="block text-sm font-medium mb-2">Select Platform</label>
          <Dropdown
            v-model="selectedPlatform"
            :options="platforms"
            optionLabel="name"
            placeholder="Select a platform"
            class="w-full"
          />
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Accounting Options</label>
        <div class="flex flex-col gap-2">
          <div v-for="option in accountingOptions" :key="option.value">
            <RadioButton
              v-model="selectedAccounting"
              :value="option.value"
              :inputId="option.value"
            />
            <label :for="option.value" class="ml-2 text-sm">{{ option.name }}</label>
          </div>
        </div>
      </div>
      <FileUpload
        mode="advanced"
        :multiple="true"
        accept="*"
        :maxFileSize="50000000"
        @upload="onUpload"
        :auto="true"
        chooseLabel="Select Files"
        class="w-full"
      >
        <template #empty>
          <div class="flex flex-col items-center justify-center p-6">
            <i class="pi pi-cloud-upload text-4xl mb-4"></i>
            <p class="text-gray-500">Drag and drop files here or click to upload</p>
          </div>
        </template>
      </FileUpload>
    </div>
  </div>
</template>

<script>
import Dropdown from 'primevue/dropdown';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import FileUpload from 'primevue/fileupload';

export default {
  name: 'FileUploadComponent',
  
  components: {
    Dropdown,
    Checkbox,
    RadioButton,
    FileUpload
  },
  
  data() {
    return {
      selectedCountry: '',
      selectedProcess: '',
      spotPrice: false,
      selectedPlatform: '',
      selectedAccounting: '',
      countries: [
        { name: 'Japan', value: 'Japan' },
        { name: 'Europe', value: 'Europe' },
        { name: 'US', value: 'US' },
        { name: 'Spain', value: 'Spain' },
        { name: 'Generic', value: 'Generic' }
      ],
      processes: [
        { name: 'DALI', value: 'DALI' },
        { name: 'RP2', value: 'RP2' }
      ],
      platforms: [
        { name: 'Binance', value: 'binance' },
        { name: 'Binance US', value: 'binanceus' },
        { name: 'Coinbase', value: 'coinbase' },
        { name: 'Kraken', value: 'kraken' }
      ],
      accountingOptions: [
        { name: 'LIFO', value: 'LIFO' },
        { name: 'FIFO', value: 'FIFO' },
        { name: 'HIFO', value: 'HIFO' }
      ]
    };
  },
  
  methods: {
    onUpload(event) {
      console.log('Files uploaded:', event.files);
    }
  }
};
</script>