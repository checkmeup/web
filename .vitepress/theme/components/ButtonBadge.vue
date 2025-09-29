<script setup lang="ts">
import Link from './Link.vue'

export interface Props {
  title: string
  src: string
  href: string
}

const props = defineProps<Props>()

import { ref } from 'vue'

const loaded = ref(false)
</script>

<template>
  <Link :href="props.href" outbound="false" :title="props.title" class="button-badge block reset-link">
    <figure data-testid="button-badge-content" class="text-xs flex flex-col relative no-underline">
      <span
        v-lazyload-observer
        class="VPImage h-20 w-20 flex items-center justify-center rounded-2xl overflow-hidden transform transition-transform duration-200 ease-out hover:scale-110 focus:scale-110 bg-gradient-to-br from-purple-200 to-slate-100 dark:from-purple-400 dark:to-slate-800"
      >
        <img
          v-if="props.src"
          :alt="'Image: ' + props.title"
          :data-url="props.src"
          @load="loaded = true"
          :class="['w-full p-4 no-shadow transition-opacity duration-500 ease-in-out', { 'opacity-100': loaded, 'opacity-0': !loaded }]"
        />
        <span v-else class="flex items-center justify-center font-bold uppercase text-2xl h-full">{{ props.title }}</span>
      </span>
    </figure>
  </Link>
</template>
