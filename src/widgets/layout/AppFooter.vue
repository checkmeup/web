<script setup lang="ts">
// Name the component with a multi-word name to satisfy the `vue/multi-word-component-names` rule
declare const defineOptions: (opts: Record<string, unknown>) => void
defineOptions({ name: 'AppFooter' })

import { defineProps } from 'vue'

const props = defineProps({
  year: { type: Number, required: true },
  version: { type: String, required: true },
})
</script>

<template>
  <footer class="border-t border-gray-200">
    <div class="max-w-4xl mx-auto px-6 py-6 text-sm text-gray-500 flex justify-between">
      <span>© {{ props.year }} CheckMeUp · v{{ props.version }}</span>
      <span>Made with ♥ in Israel</span>
    </div>
  </footer>
</template>

<style scoped></style>
