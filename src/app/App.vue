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
      <div class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900">Reliable monitoring, zero friction</h1>
        <p class="mt-4 text-lg text-gray-600">Lightweight uptime and health checks with actionable alerts and beautiful dashboards.</p>

        <div class="mt-8 flex justify-center gap-4">
          <a class="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700" href="#"
            >Get started — it's free</a
          >
          <a class="inline-flex items-center px-6 py-3 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100" href="#"
            >Learn more</a
          >
        </div>

        <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div>
            <h3 class="font-semibold text-gray-900">Easy setup</h3>
            <p class="text-sm text-gray-600 mt-1">Integrate in minutes with simple APIs and sensible defaults.</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Multi-channel alerts</h3>
            <p class="text-sm text-gray-600 mt-1">Email, SMS, Slack and webhooks — configurable per-team.</p>
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">Scalable</h3>
            <p class="text-sm text-gray-600 mt-1">Built to handle thousands of monitors with low overhead.</p>
          </div>
        </div>
      </div>
    </main>

    <Footer :year="year" :version="version" />
  </div>
</template>

<style scoped></style>
