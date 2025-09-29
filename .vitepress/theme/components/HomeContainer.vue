<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useElementVisibility } from '@vueuse/core'

interface HomeContainerProps {
  animate?: boolean
}

const props = withDefaults(defineProps<HomeContainerProps>(), {
  animate: false,
})

const target = ref<HTMLElement | null>(null)
const targetIsVisible = useElementVisibility(target, {
  threshold: 0.2,
})

// Track whether the target has ever been visible so it doesn't disappear after first reveal
const hasBeenVisible = ref(false)
// Keep hasBeenVisible true once the element becomes visible
watch(targetIsVisible, (v) => {
  if (v) hasBeenVisible.value = true
})

// Computed property for better reactivity and performance
// If animate is false we always show; if animate is true we show when visible or once it has been visible
const show = computed(() => !props.animate || targetIsVisible.value || hasBeenVisible.value)
</script>

<template>
  <div class="w-full" :class="{ 'max-w-[100vw] overflow-hidden': props.animate }">
    <div
      ref="target"
      class="relative px-6 py-2 sm:px-12 lg:px-16"
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
