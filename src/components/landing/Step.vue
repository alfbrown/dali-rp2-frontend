<template>
  <div class="max-w-[280px] xl:max-w-[363px] 2xl:max-w-[420px] 3xl:max-w-[500px] 4xl:max-w-[580px] 5xl:max-w-[640px] 6xl:max-w-[720px] space-y-6 sm:space-y-3 text-center">
    <img :src="require(`@/assets/img/getting-started/${step.img}`)" class="max-w-[8rem] 2xl:max-w-[10rem] 3xl:max-w-[12rem] 4xl:max-w-[14rem] 5xl:max-w-[16rem] 6xl:max-w-[18rem] mx-auto" alt="" />
    <h3 class="text-neutral-800 font-semibold text-xl 2xl:text-[1.4rem] 3xl:text-2xl 4xl:text-[1.8rem] 4xl:leading-8 5xl:leading-[3rem] 6xl:leading-[3.5rem] 5xl:text-[2.5rem]">{{ step.title }}</h3>
    <p class="text-gray-700 leading-relaxed text-sm 2xl:text-base 3xl:text-lg 4xl:text-[1.3rem] 5xl:text-2xl 6xl:text-[1.7rem]">
      {{ step.description }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'LandingStep',
  props: {
    step: {
      type: Object,
      required: true,
    },
  },}
</script>
