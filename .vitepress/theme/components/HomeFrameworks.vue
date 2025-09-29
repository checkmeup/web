<script setup lang="ts">
import { useFrontMatter } from '../composables/useFrontMatter'
import Frameworks, { type Framework } from './Frameworks.vue'

const frontmatter = useFrontMatter()
const frameworks = (frontmatter.value.frameworks as Framework[]).map((item, index) => {
  return {
    ...item,
    id: index,
  }
})
</script>
<template>
  <article class="flex flex-col sm:flex-row pt-10 sm:pt-20 gap-10">
    <div class="text-center sm:text-left flex items-center text-gray-600 dark:text-gray-400">
      <div>
        <div class="text-2xl sm:text-3xl leading-normal">Trusted technologies and tools</div>
        <p class="py-6 text-normal sm:text-lg">
          We rely on proven, production-ready tools and open-source projects whose stability and ecosystems let us focus on reliability,
          seamless integrations, and helping you ship with confidence.
        </p>
      </div>
    </div>
    <Frameworks :items="frameworks" />
  </article>
</template>
