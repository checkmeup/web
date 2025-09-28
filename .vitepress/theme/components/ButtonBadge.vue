<script setup lang="ts">
import Link from './Link.vue'
import { computed } from 'vue'

export interface ButtonBadgeProps {
  showTitle?: boolean
}

export interface Props extends ButtonBadgeProps {
  title?: string
  src?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  showTitle: true,
  width: 60,
  bgColor: 'gray-lighter',
  blur: 0,
  textSize: 'xxs',
  shadow: 'none',
  padding: 0,
  fontWeight: 'normal',
  title: '',
  src: '',
  href: '',
})

const initial = (text = '') => {
  return text
    .split(' ')
    .map((text) => text.slice(0, 1))
    .join('')
}
const overflow = (text = '') => {
  return text.slice(0, 12) + (text.length > 12 ? '...' : '')
}
</script>

<template>
  <Link :href="href" outbound="false" :title="title" class="button-badge block reset-link">
    <figure data-testid="button-badge-content" class="text-xs flex flex-col transition-all relative no-underline">
      <span
        v-lazyload-observer
        class="VPImage h-20 w-20 flex items-center justify-center relative z-2 rounded-2xl overflow-hidden mb-2 bg-slate-100 dark:bg-slate-800 transition-all scale-100 hover:scale-110 focus:scale-110 text-red-300 dark:text-purple-300"
      >
        <img v-if="src" :alt="'Image: ' + title" :data-url="src" class="w-full opacity-0 transition-all no-shadow p-4" />
        <span v-else class="flex items-center justify-center font-bold uppercase text-2xl h-full">{{ initial(title) }}</span>
      </span>
      <figcaption v-show="showTitle" class="flex items-center justify-center whitespace-pre" :style="{ width: `${width}px` }">
        {{ overflow(title) }}
      </figcaption>
    </figure>
  </Link>
</template>
<style scoped>
.VPImage img {
  transition: opacity 0.5s ease-in-out;
}
.VPImage img[data-loaded='true'] {
  opacity: 100;
}
</style>
