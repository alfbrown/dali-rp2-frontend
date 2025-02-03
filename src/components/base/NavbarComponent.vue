<template>
  <nav id="navbar" class="relative z-10 w-full bg-white shadow-md text-neutral-800">
    <div class="max-w-screen-xl mx-auto px-8 py-4 flex items-center justify-between">
      <div>
        <!-- <img src="@/assets/img/logo/nefa.svg" class="w-24 xl:w-28" alt="Nefa Logo" /> -->
      </div>
      <div class="hidden lg:flex space-x-6">
        <router-link
          to="/"
          class="text-lg font-semibold hover:text-primary-500 transition-colors duration-200"
        >
          Home
        </router-link>
        <router-link
          to="/privacy"
          class="text-lg font-semibold hover:text-primary-500 transition-colors duration-200"
        >
          Privacy Policy
        </router-link>
        <router-link
          to="/terms"
          class="text-lg font-semibold hover:text-primary-500 transition-colors duration-200"
        >
          Terms of Service
        </router-link>
        <router-link
          to="/documentation"
          class="text-lg font-semibold hover:text-primary-500 transition-colors duration-200"
        >
          Doccumentation
        </router-link>
      </div>
      <button
        class="lg:hidden focus:outline-none focus:shadow-outline"
        @click="open = !open"
      >
        <Menu v-if="!open" :size="24" />
        <Close v-else :size="24" />
      </button>
    </div>

    <div v-if="open" class="lg:hidden px-8 py-4 bg-white border-t border-gray-200">
      <div class="flex flex-col space-y-4">
        <router-link
          to="/"
          class="text-lg font-semibold hover:text-primary-500 transition-colors duration-200"
          @click="open = false"
        >
          Home
        </router-link>
        <router-link
          to="/privacy"
          class="text-lg font-semibold hover:text-primary-500 transition-colors duration-200"
          @click="open = false"
        >
          Privacy Policy
        </router-link>
        <router-link
          to="/terms"
          class="text-lg font-semibold hover:text-primary-500 transition-colors duration-200"
          @click="open = false"
        >
          Terms of Service
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Menu from 'vue-material-design-icons/Menu.vue'
import Close from 'vue-material-design-icons/Close.vue'

export default {
  name: 'BaseNavbar',
  components: {
    Menu,
    Close
  },
  data() {
    return {
      open: false
    }
  }
}
</script>
