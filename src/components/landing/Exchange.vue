<template>
  <div class="flex items-center space-x-4">
    <div class="lg:max-w-[336px] w-full flex items-center relative px-5 py-3 border border-[#0c66ee] rounded-xl">
      <span class="text-sm font-medium pr-5 py-3 text-[#0c66ee] border-r border-[#0c66ee]">{{ title }}</span>
      <input
        :type="type"
        class="w-full text-lg font-medium text-right border-none ring-0 focus:outline-none focus:ring-0"
        :name="name"
        :value="defaultValue"
      />
    </div>

    <div class="relative w-full max-w-[106px] sm:max-w-[159px]">
      <button
        type="button"
        class="w-full flex items-center justify-center space-x-1 relative sm:px-6 py-[1.35rem] border border-[#0c66ee] rounded-xl text-sm font-medium"
        @click="toggleDropdown"
        @blur="handleBlur"
      >
        <img 
          v-if="hasCurrentExchangeImage"
          :src="`/src/assets/img/${currentExchange.img}`"
          alt="" 
          class="flex-shrink-0 h-6 w-6 rounded-full" 
        />
        <span class="ml-3 block truncate">{{ currentExchange.name }}</span>
        <ChevronDown :size="20" />
      </button>

      <Transition name="transform-fade-down">
        <ul
          v-if="openDropdown"
          class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm border border-[#0c66ee]"
          tabindex="-1"
        >
          <li
            v-for="exchange in exchanges"
            :key="exchange.name"
            class="text-gray-900 cursor-default select-none relative px-3 sm:px-5 py-2"
            role="option"
            @mousedown.prevent="selectExchange(exchange)"
          >
            <div class="flex items-center">
              <img 
                v-if="exchange.img" 
                :src="`/src/assets/img/${exchange.img}`"
                alt="" 
                class="flex-shrink-0 h-6 w-6 rounded-full" 
              />
              <span class="font-normal ml-3 block truncate">{{ exchange.name }}</span>
            </div>
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingExchange',
  
  props: {
    title: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true,
      default: ''
    },
    defaultValue: {
      type: [Number, String],
      default: ''
    },
    exchangeSelected: {
      type: Object,
      required: true,
      default: () => ({
        name: 'Select',
        img: ''
      })
    },
    exchanges: {
      type: Array,
      required: true,
      default: () => []
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  emits: ['update:exchangeSelected'],
  data() {
    return {
      openDropdown: false,
      closeTimeout: null
    }
  },
  computed: {
    currentExchange() {
      return this.exchangeSelected || { name: 'Select', img: '' }
    },
    hasCurrentExchangeImage() {
      return !!this.currentExchange.img;
    }
  },
  methods: {
    toggleDropdown() {
      this.openDropdown = !this.openDropdown
    },
    handleBlur() {
      this.closeTimeout = setTimeout(() => {
        this.openDropdown = false
      }, 200)
    },
    selectExchange(exchange) {
      clearTimeout(this.closeTimeout)
      this.$emit('update:exchangeSelected', exchange)
      this.openDropdown = false
    }
  }
}
</script>

<style scoped>
.transform-fade-down-enter-active,
.transform-fade-down-leave-active {
  transition: all 0.3s ease;
}

.transform-fade-down-enter-from,
.transform-fade-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>