<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div class="flex flex-col max-w-screen-xl px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-4">
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8">
        <div class="w-full flex flex-row items-center justify-between py-6">
          <div>
            <img src='@/assets/img/logo/nefa.svg' class="w-24 xl:w-28" alt="Nefa Logo" />
          </div>
          <button class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
            <Menu v-if="!open" :size="24" />
            <Close v-else :size="24" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import Menu from 'vue-material-design-icons/Menu.vue'
import Close from 'vue-material-design-icons/Close.vue'

export default {
  components: {
    Menu,
    Close
  },
  data() {
    return {
      open: false,
      dropdownNavbar: false
    }
  },
  methods: {
    dropdownToggler() {
      this.dropdownNavbar = !this.dropdownNavbar
    }
  }
}
</script>
