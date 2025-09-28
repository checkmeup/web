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
      <div class="!text-2xl !sm:text-5xl">
        This is a curated list of libraries, frameworks, and technologies that we use to build CheckMeUp and officially support for
        integrations and tooling.
      </div>
    </div>
    <Frameworks :items="frameworks" />
  </article>
</template>
