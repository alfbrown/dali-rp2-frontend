<template>
  <li class="flex space-x-4">
    <div class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100">
      <LockIcon v-if="title.includes('Privacy')" class="w-5 h-5 text-blue-600" />
      <CalculatorIcon v-if="title.includes('Tools')" class="w-5 h-5 text-blue-600" />
      <ShieldIcon v-if="title.includes('Free')" class="w-5 h-5 text-blue-600" />
    </div>
    <div>
      <h3 class="text-lg font-medium">{{ title }}</h3>
      <slot></slot>
    </div>
  </li>
</template>

<script>
import { Lock, Calculator, Shield } from 'lucide-vue-next'

export default {
  name: 'AboutListItem',
  components: {
    LockIcon: Lock,
    CalculatorIcon: Calculator,
    ShieldIcon: Shield
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>