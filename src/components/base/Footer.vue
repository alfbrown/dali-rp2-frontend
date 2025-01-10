<template>
  <footer class="px-8 mx-auto">
    <div class="w-full border-y border-[#DDDDDD]">
      <div class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div class="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-4 sm:py-8 md:py-2 border-t sm:border-t xl:border-r border-[#DDDDDD]">
          <ul class="space-y-3">
            <NavLink name="Requirements" url="#"/>
            <NavLink name="About Us" url="#" />
          </ul>
        </div>
        <div class="md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 lg:px-2 py-4 sm:py-8 md:py-2 border-t sm:border-t-0 sm:border-r-0 border-[#DDDDDD]">
          <ul class="space-y-3">
            <NavLink name="Terms and Conditions" url="#" />
            <NavLink name="Privacy Policy" url="#" />
          </ul>
        </div>
        <div
          class="md:w-full md:border-t lg:w-full sm:px-10 py-4 sm:py-8 md:py-2 w-full sm:w-1/2 xl:w-[22rem] space-y-3 sm:border-t border-[#DDDDDD]"
        >
          <h5 class="text-sm 2xl:text-base 3xl:text-lg 4xl:text-[1.3rem] 5xl:text-2xl 6xl:text-[1.7rem] font-medium text-[#666666] focus:outline-none focus:shadow-outline">Newsletter</h5>
          <p class="text-sm 2xl:text-base 3xl:text-lg 4xl:text-[1.3rem] 5xl:text-2xl 6xl:text-[1.7rem] text-[#666666] focus:outline-none focus:shadow-outline">
            Never miss anything crypto when <br class="sm:hidden" />you're on the go
          </p>
          <div class="flex items-center space-x-2">
            <input
              type="text"
              class="w-full px-2 py-3 sm:py-2 rounded-lg sm:rounded-md text-sm 2xl:text-base 3xl:text-lg 4xl:text-[1.3rem] 5xl:text-2xl 6xl:text-[1.7rem] focus:outline-none border border-[#AAAAAA] placeholder-[#888]"
              placeholder="Enter your email"
            />
            <button
              class="bg-blue-gradient px-4 py-3 sm:py-2 rounded-md text-white hover:shadow-md transition duration-300"
            >
              <ArrowRightIcon :size="20" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6 sm:py-3 text-center text-sm 2xl:text-base 3xl:text-lg 4xl:text-[1.3rem] 5xl:text-2xl 6xl:text-[1.7rem] text-[#666666] hover:text-gray-900">
      &copy; Copyright 2025 PHW DATA ANALYTICS, LLC. All rights reserved
    </div>
  </footer>
</template>

<script>
import NavLink from '@/components/NavLink.vue';

export default {
  name: 'BaseFooter',
  components: {NavLink}
}
</script>