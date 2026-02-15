<script setup lang="ts">
import './styles'
import pkg from '../../package.json'
import { AppFooter as Footer, AppHeader as Header } from '../widgets/layout'

const year = new Date().getFullYear()
const envVersion = (import.meta.env && import.meta.env.VITE_APP_VERSION) || undefined
const version = envVersion || pkg.version || '0.0.0'
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Header />

    <main class="flex-1 flex items-center">
      <router-view />
    </main>

    <Footer :year="year" :version="version" />
  </div>
</template>

<style scoped></style>
