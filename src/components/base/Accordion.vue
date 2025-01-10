<template>
  <li class="relative border-b-2 border-gray-200 ">
    <button type="button" class="w-full py-4 text-left" @click="selected = !selected">
      <div class="flex items-center justify-between">
        <span class="font-medium text-base 2xl:text-lg 3xl:text-[1.3rem] 4xl:text-2xl 5xl:text-[1.7rem] 6xl:text-[2rem]">{{ accordion.title }}</span>
        <ChevronUpIcon v-if="selected" :size="20" />
        <ChevronDownIcon v-else :size="20" />
      </div>
    </button>

    <transition name="slide">
      <div v-if="selected" class="relative overflow-hidden transition-all duration-300 ease-out">
        <div class="py-2">
          <p class="ttext-gray-700 tracking-wide leading-relaxed text-sm 2xl:text-base 3xl:text-lg 4xl:text-[1.3rem] 5xl:text-2xl 6xl:text-[1.7rem]" v-html="accordion.description"></p>
        </div>
      </div>
    </transition>

  </li>
</template>
<script>
import ChevronUpIcon from 'vue-material-design-icons/ChevronUp.vue'
import ChevronDownIcon from 'vue-material-design-icons/ChevronDown.vue'
export default {
  components: {
    ChevronUpIcon,
    ChevronDownIcon
  },
  name: 'BaseAccordion',
  props: {
    accordion: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    }
  },
}
</script>
