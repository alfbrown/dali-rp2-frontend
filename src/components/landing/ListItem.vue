<template>
  <li class="space-y-2">
    <div class="flex items-center space-x-2">
      <CheckCircleIcon :size="20" class="text-[#0c66ee]" />
      <span class="text-base 2xl:text-lg 3xl:text-[1.3rem] 4xl:text-2xl 5xl:text-[1.7rem] 6xl:text-[2rem]">{{ title }}</span>
    </div>
    <slot></slot>
  </li>
</template>
<script>
import CheckCircleIcon from 'vue-material-design-icons/CheckCircle.vue'
  export default {
  components: {
    CheckCircleIcon
  },
  name: 'LandingListItem',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
