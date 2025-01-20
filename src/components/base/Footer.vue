<template>
  <footer class="relative max-w-full xl:mx-0 mx-auto">
    <div class="w-full border-y border-[#DDDDDD] min-h-[200px] flex items-center bg-partner">
      <div class="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto w-full py-12 gap-8">
        <div class="flex items-center justify-center gap-8 list-none">
          <NavLink name="Documentation" url="#"/>
          <NavLink name="Terms and Conditions" url="#" />
          <NavLink name="Privacy Policy" url="#" />
        </div>

        <!--div class="flex items-center gap-4">
          <input
            type="text"
            class="px-4 py-2 rounded-md text-sm focus:outline-none border border-[#AAAAAA] placeholder-[#888] w-[280px]"
            placeholder="Subscribe to our newsletter"
          />
          <button
            class="bg-blue-gradient px-4 py-2 rounded-md text-white hover:shadow-md transition duration-300"
          >
            <ArrowRightIcon :size="20" />
          </button>
        </div-->
      </div>
    </div>
    <div class="py-6 sm:py-3 text-center text-sm 2xl:text-base 3xl:text-lg 4xl:text-[1.3rem] 5xl:text-2xl 6xl:text-[1.7rem] text-[#666666] hover:text-gray-900">
      &copy; Copyright 2025 PHW DATA ANALYTICS, LLC. All rights reserved
    </div>
  </footer>
</template>

<style scoped>
.bg-partner {
  background: url('@/assets/img/partner/background.png');
  background-size: cover;
  background-position: center;
}
</style>

<script>
import NavLink from '@/components/NavLink.vue';

export default {
  name: 'BaseFooter',
  components: {NavLink}
}
</script>