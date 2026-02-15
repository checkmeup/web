<script setup lang="ts">
// NotFound page — FSD: pages/NotFound
defineOptions({ name: 'NotFoundPage' })
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-20 text-center">
    <h1 class="text-3xl font-bold text-gray-900">Page not found</h1>
    <p class="mt-4 text-gray-600">We couldn't find the page you're looking for.</p>
    <div class="mt-6">
      <a href="/" class="text-indigo-600 hover:underline">Go back home</a>
    </div>
  </div>
</template>

<style scoped></style>
