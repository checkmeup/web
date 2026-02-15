<script setup lang="ts">
// Name the component with a multi-word name to satisfy the `vue/multi-word-component-names` rule
defineOptions({ name: 'AppHeader' })
</script>

<template>
  <header class="max-w-4xl mx-auto w-full p-6">
    <nav class="flex items-center justify-between">
      <div class="text-xl font-semibold">CheckMeUp</div>
      <div class="space-x-4">
        <a href="#" class="text-sm text-gray-700 hover:text-gray-900">Docs</a>
        <a href="#" class="text-sm text-indigo-600 font-medium">Sign in</a>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
