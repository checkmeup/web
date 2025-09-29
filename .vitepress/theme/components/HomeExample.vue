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
  <article>
    <div class="text-2xl sm:text-3xl leading-normal py-10 text-gray-600 dark:text-gray-400">Quick example</div>
    <div class="flex flex-col sm:flex-row gap-10 items-start">
      <!-- Left: Code example -->
      <div class="w-full sm:w-1/2 text-gray-300 dark:text-gray-400">
        <div class="rounded-lg bg-gray-800 dark:bg-gray-900 p-4">
          <div class="text-sm text-gray-500 dark:text-gray-600 mb-2">cURL</div>
          <pre class="overflow-auto px-6 py-2 rounded text-sm"><code>curl -X GET "https://ping.checkmeup.net/a58e491ac1e3" -I</code></pre>

          <div class="mt-4 text-sm text-gray-500 dark:text-gray-600 mb-2">Node (fetch)</div>
          <pre class="overflow-auto px-6 py-2 rounded text-sm"><code>await fetch('https://ping.checkmeup.net/6fe50f004f3c')</code></pre>

          <div class="mt-4 text-sm text-gray-500 dark:text-gray-600 mb-2">Go (net/http)</div>
          <pre class="overflow-auto px-6 py-2 rounded text-sm"><code>http.Get("https://ping.checkmeup.net/79ea089ddd5c")</code></pre>
        </div>
      </div>

      <!-- Right: Technical integration details -->
      <div class="w-full sm:w-1/2 text-gray-600 dark:text-gray-400">
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <svg class="w-2 h-2 mt-2 text-sky-300 flex-shrink-0" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
              <circle cx="4" cy="4" r="4" />
            </svg>
            <div>
              <strong>HTTP method:</strong> GET or POST. Include optional run metadata as JSON in a POST body, or as query parameters when
              using GET.
            </div>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-2 h-2 mt-2 text-sky-300 flex-shrink-0" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
              <circle cx="4" cy="4" r="4" />
            </svg>
            <div>
              <strong>Success criteria:</strong> Any 2xx response (200–299) is treated as a successful run; 3xx/4xx/5xx count as failures.
            </div>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-2 h-2 mt-2 text-sky-300 flex-shrink-0" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
              <circle cx="4" cy="4" r="4" />
            </svg>
            <div>
              <strong>Interval & grace:</strong> Set the expected interval (e.g., 15m) and a grace window (e.g., +10m) to avoid false
              positives from slight timing jitter.
            </div>
          </div>

          <div class="flex items-start gap-3">
            <svg class="w-2 h-2 mt-2 text-sky-300 flex-shrink-0" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true">
              <circle cx="4" cy="4" r="4" />
            </svg>
            <div>
              <strong>Security:</strong> Protect your heartbeat URL (secret token in path) or require a header (e.g., X-CheckMeUp-Token).
              Optionally restrict pings by IP address when you control sender addresses.
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
