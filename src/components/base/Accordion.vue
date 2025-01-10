<template>
  <li class="relative border-b-2 border-gray-200 3xl:text-2xl 5xl:text-3xl">
    <button type="button" class="w-full py-4 text-left" @click="selected = !selected">
      <div class="flex items-center justify-between">
        <span class="font-medium">{{ accordion.title }}</span>
        <ChevronUpIcon v-if="selected" :size="20" />
        <ChevronDownIcon v-else :size="20" />
      </div>
    </button>

    <transition name="slide">
      <div v-if="selected" class="relative overflow-hidden transition-all duration-700">
        <div class="py-2">
          <p class="text-sm text-gray-700 tracking-wide leading-relaxed 3xl:text-xl" v-html="accordion.description"></p>
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
