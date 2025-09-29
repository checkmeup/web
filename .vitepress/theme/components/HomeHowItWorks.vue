<script setup lang="ts">
import HomeContainer from './HomeContainer.vue'
</script>
<template>
  <HomeContainer>
    <article class="py-10 text-gray-600 dark:text-gray-400">
      <div class="text-2xl sm:text-3xl leading-normal">How it works</div>
      <p class="py-6 text-normal sm:text-lg">
        When you create a scheduled check we give you a unique URL (a heartbeat endpoint). Your service or scheduler pings that URL on the
        schedule you set. Each successful ping marks the check as healthy. If we don’t receive a ping within the configured window, the
        check is marked failed and your configured alert channels are notified.
      </p>

      <div>
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <!-- Step 1 -->
          <div
            class="w-48 h-32 rounded-lg flex flex-col justify-center items-center shadow-lg bg-gradient-to-br from-purple-200/60 to-slate-100 dark:from-purple-400/20 dark:to-slate-800"
          >
            <span class="text-xl font-bold mb-2">1. Create Check</span>
          </div>

          <!-- Arrow separator (right on desktop, down on mobile) -->
          <div class="flex items-center justify-center">
            <!-- right arrow for sm+ -->
            <svg
              aria-hidden="true"
              class="!hidden sm:!block w-8 h-8 text-gray-300 dark:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <!-- down arrow for small screens -->
            <svg
              aria-hidden="true"
              class="!block sm:!hidden w-6 h-6 text-gray-300 dark:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <!-- Step 2 -->
          <div
            class="w-48 h-32 rounded-lg flex flex-col justify-center items-center shadow-lg bg-gradient-to-br from-purple-200/60 to-slate-100 dark:from-purple-400/20 dark:to-slate-800"
          >
            <span class="text-xl font-bold mb-2">2. Ping URL</span>
          </div>

          <!-- Arrow separator (right on desktop, down on mobile) -->
          <div class="flex items-center justify-center">
            <svg
              aria-hidden="true"
              class="!hidden sm:!block w-8 h-8 text-gray-300 dark:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <svg
              aria-hidden="true"
              class="!block sm:!hidden w-6 h-6 text-gray-300 dark:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <!-- Step 3 -->
          <div
            class="w-48 h-32 rounded-lg flex flex-col justify-center items-center shadow-lg bg-gradient-to-br from-purple-200/60 to-slate-100 dark:from-purple-400/20 dark:to-slate-800"
          >
            <span class="text-xl font-bold mb-2">3. Get Alerts</span>
          </div>
        </div>
      </div>
      <p class="pt-6 text-normal sm:text-lg">
        Keep monitoring simple. A single heartbeat URL, straightforward success criteria (any 2xx), and configurable grace windows give you
        a reliable safety net — no extra complexity required.
      </p>
    </article>
  </HomeContainer>
</template>
