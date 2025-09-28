<script setup lang="ts">
import ButtonBadge, { type ButtonBadgeProps } from './ButtonBadge.vue'
import { useIntervalFn } from '@vueuse/core'
import { onBeforeUnmount } from 'vue'
import { useRandomItems } from '../composables/useRandom'

export interface Framework {
  id: number
  title: string
  href: string
  src: string
}

export interface FrameworksProps {
  maxItems?: number
  delay?: number
  items?: Framework[]
}

const props = withDefaults(defineProps<FrameworksProps>(), {
  maxItems: 15,
  delay: 2000,
  items: () => [],
})

const { items, update } = useRandomItems({
  maxItems: props.maxItems,
  initItems: props.items,
})

// Set up an interval to update the items periodically
const { pause } = useIntervalFn(() => {
  update()
}, props.delay)

onBeforeUnmount(() => pause())

// run once at mount to initialize items
update()

function beforeLeave(el: any) {
  const { marginLeft, marginTop, width, height } = window.getComputedStyle(el)
  el.style.left = `${el.offsetLeft - parseFloat(marginLeft)}px`
  el.style.top = `${el.offsetTop - parseFloat(marginTop)}px`
  el.style.width = width
  el.style.height = height
}
</script>
<template>
  <ul name="list" tag="ul" class="mb-5 reset-list flex flex-wrap items-center gap-5" @before-leave="beforeLeave">
    <li v-for="item in items" :key="item.id" class="w-1/5 sm:w-auto relative">
      <ButtonBadge v-bind="props" :title="item.title" :href="item.href" :src="item.src" :padding="4" show-title />
    </li>
  </ul>
</template>
<style scoped>
.list-item {
  transition: all 1.5s ease;
}

.list-enter-active,
.list-leave-active {
  transition:
    opacity 1.5s,
    transform 1.5s;
}

.list-leave-active {
  position: absolute;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
