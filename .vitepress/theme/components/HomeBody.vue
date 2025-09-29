<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import HomeContainer from './HomeContainer.vue'
import HomeProduct from './HomeProduct.vue'
import HomeExample from './HomeExample.vue'
import HomeFrameworks from './HomeFrameworks.vue'
import HomeTestimonials from './HomeTestimonials.vue'
import HomePricing from './HomePricing.vue'

const route = useRoute()
</script>

<template>
  <HomeContainer animate>
    <HomeExample />
  </HomeContainer>
  <HomeContainer animate>
    <HomeProduct />
  </HomeContainer>
  <HomeContainer animate>
    <HomeFrameworks />
  </HomeContainer>
  <HomeContainer animate>
    <HomeTestimonials />
  </HomeContainer>
  <HomeContainer animate>
    <HomePricing />
  </HomeContainer>
</template>
