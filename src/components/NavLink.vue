<template>
  <li class="w-full">
    <a
      class="md:px-4 xl:px-0 py-2 text-sm 2xl:text-base 3xl:text-lg 4xl:text-[1.3rem] 5xl:text-2xl 6xl:text-[1.7rem] bg-transparent rounded-lg text-[#666666] hover:text-gray-900 focus:outline-none focus:shadow-outline whitespace-nowrap"
      :href="url"
    >
      {{ name }}
    </a>
  </li>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
}
</script>
