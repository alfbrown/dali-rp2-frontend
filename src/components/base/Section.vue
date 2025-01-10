<template>
  <div class="relative px-4 sm:px-8 grid grid-cols-12 gap-x-6 overflow-hidden" v-bind="$attrs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BaseSection',
}
</script>
