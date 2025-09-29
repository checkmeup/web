<script setup lang="ts">
import ButtonBadge from './ButtonBadge.vue'
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
  // Move the element off-screen before starting the leave transition to avoid layout flickers
  el.style.left = '-3000px'
  el.style.position = 'absolute'
  el.style.top = `${el.offsetTop - parseFloat(marginTop)}px`
  el.style.width = width
  el.style.height = height
  el.style.left = `${el.offsetLeft - parseFloat(marginLeft)}px`
}
</script>
<template>
  <transition-group
    tag="ul"
    name="frameworks"
    class="mb-5 reset-list relative flex flex-wrap items-center gap-5"
    @before-leave="beforeLeave"
    enter-active-class="transition-opacity transition-transform duration-500 ease-in-out"
    leave-active-class="transition-opacity transition-transform duration-500 ease-in-out absolute"
    enter-from-class="opacity-0 scale-90"
    leave-to-class="opacity-0 scale-90"
  >
    <li v-for="item in items" :key="item.id" class="w-1/5 sm:w-auto relative flex-none">
      <ButtonBadge v-bind="props" :title="item.title" :href="item.href" :src="item.src" :padding="4" show-title />
    </li>
  </transition-group>
</template>
