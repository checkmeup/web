<script setup lang="ts">
import HomeContainer from './HomeContainer.vue'
</script>
<template>
  <HomeContainer>
    <article class="py-10 sm:py-20 text-gray-600 dark:text-gray-400">
      <div class="text-2xl sm:text-3xl leading-normal">How it works</div>
      <p class="py-6 text-normal sm:text-lg">
        When you create a scheduled check we give you a unique URL (a heartbeat endpoint). Your service or scheduler pings that URL on the
        schedule you set. Each successful ping marks the check as healthy. If we don’t receive a ping within the configured window, the
        check is marked failed and your configured alert channels are notified.
      </p>

      <div class="my-5 flex justify-center">
        <!-- <img class="rounded-lg shadow-lg" src="/assets/ChatGPT1.png" alt="How It Works" width="800" height="400" /> -->
        <img class="" src="/assets/flow.svg" alt="How It Works" />
      </div>
      <p class="pt-6 text-normal sm:text-lg">
        Keep monitoring simple and effective. A single heartbeat URL eliminates endpoint sprawl, while straightforward success criteria
        removes guesswork from health validation. Configurable grace windows let you fine-tune sensitivity for your specific workloads,
        whether they're quick API calls or longer batch processes. Together, these three components give you a reliable safety net that
        adapts to your needs — comprehensive protection without the configuration complexity that slows down other monitoring solutions.
      </p>
    </article>
  </HomeContainer>
</template>
