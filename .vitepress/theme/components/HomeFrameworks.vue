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
    <div class="text-center sm:text-left flex items-center">
      <div>
        <div class="text-2xl sm:text-3xl leading-normal">
          Our carefully curated collection of modern technologies, frameworks, and tools that power CheckMeUp's infrastructure.
        </div>
        <p class="py-6 text-normal sm:text-lg">
          These are the battle-tested solutions we rely on daily, with first-class support for seamless integrations, comprehensive tooling,
          and developer-friendly APIs.
        </p>
      </div>
    </div>
    <Frameworks :items="frameworks" />
  </article>
</template>
