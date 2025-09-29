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

const items = [
  {
    id: 1,
    title: 'Overview dashboard',
    body: 'At-a-glance metrics and status across your checks with fast filtering and drill-in links.',
    src: '/assets/grafana-dashboard-metrics-hero-status-view-cropped.png',
    alt: 'Overview dashboard showing status and metrics',
  },
  {
    id: 2,
    title: 'Detailed metrics',
    body: 'High-cardinality metrics and trends for diagnosing missed runs and patterns over time.',
    src: '/assets/grafana-dashboard-metrics-cardinality-cropped-2.png',
    alt: 'Metrics dashboard showing cardinality and trends',
  },
  {
    id: 3,
    title: 'Trace-enabled debugging',
    body: 'Distributed traces and run logs attached to failed checks for quick root-cause analysis.',
    src: '/assets/grafana-products-traces-dashboard-screenshot.png',
    alt: 'Trace dashboard screenshot',
  },
  {
    id: 4,
    title: 'Topology & maps',
    body: 'Visual topology and maps to spot regional issues and impacted services at a glance.',
    src: '/assets/grafana-products-traces-map-screenshot.png',
    alt: 'Topology map screenshot',
  },
]
</script>
<template>
  <article class="py-10 space-y-12 text-gray-600 dark:text-gray-400">
    <div class="text-2xl sm:text-3xl leading-normal">What you see is what you get</div>

    <section
      v-for="(item, idx) in items"
      :key="item.id"
      :class="idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'"
      class="flex flex-col lg:flex-row items-center gap-6"
    >
      <!-- Image column (about 65%) -->
      <div class="w-full lg:w-2/3">
        <img :src="item.src" :alt="item.alt" class="w-full h-auto rounded-lg shadow-md object-cover" />
      </div>

      <!-- Text column (about 35%) -->
      <div class="w-full lg:w-1/3">
        <div class="text-xl font-semibold mb-2">{{ item.title }}</div>
        <p class="leading-relaxed">{{ item.body }}</p>
      </div>
    </section>
  </article>
</template>
