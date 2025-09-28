<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import HomeFrameworks from './HomeFrameworks.vue'
import HomeContainer from './HomeContainer.vue'

const route = useRoute()
const isHome = computed(() => route.path === '/' || route.path.startsWith('/index'))
</script>

<template>
  <HomeContainer v-if="isHome" animate>
    <HomeFrameworks />
  </HomeContainer>
</template>
