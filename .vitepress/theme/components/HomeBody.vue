<script setup lang="ts">
import HomeFrameworks from './HomeFrameworks.vue'
import HomeContainer from './HomeContainer.vue'
// import HomeTeams from "./HomeTeams.vue";
// import MessageCircleHeart from "../../atoms/svg/MessageCircleHeart.vue";
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isHome = computed(() => {
  return route.path === '/' || route.path === ''
})
</script>
<template>
  <HomeContainer v-if="isHome" animate>
    <HomeFrameworks v-if="isHome">
      Here are some of the libraries and technologies that we use or support with this
      <strong>framework</strong>
    </HomeFrameworks>
  </HomeContainer>
</template>
