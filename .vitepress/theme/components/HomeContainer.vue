<script setup lang="ts">
import { ref, computed } from 'vue'
import { useElementVisibility } from '@vueuse/core'

interface HomeContainerProps {
  animate?: boolean
}

const props = withDefaults(defineProps<HomeContainerProps>(), {
  animate: false,
})

const target = ref<HTMLElement | null>(null)
const targetIsVisible = useElementVisibility(target, {
  threshold: 0.3,
})

// Computed property for better reactivity and performance
const show = computed(() => !props.animate || targetIsVisible.value)
</script>

<template>
  <div class="w-full" :class="{ 'max-w-[100vw] overflow-x-hidden': props.animate }">
    <div
      ref="target"
      class="relative px-6 sm:px-12 lg:px-16"
      :class="[
        {
          'opacity-0 scale-105 translate-y-6': !show,
          'opacity-100 scale-100 translate-y-0': show,
        },
        props.animate && 'transition-all ease-out duration-700 delay-150',
      ]"
    >
      <div class="mx-auto max-w-6xl">
        <slot />
      </div>
    </div>
  </div>
</template>
