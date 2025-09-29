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
    <h1>Testimonials</h1>
  </article>
</template>
