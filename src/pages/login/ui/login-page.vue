<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { loginSchema } from '../model/login-schema'
import { toTypedSchema } from '@vee-validate/zod'
import { ref } from 'vue'

const { handleSubmit, errors, submitCount, isSubmitting } = useForm({
  validationSchema: toTypedSchema(loginSchema),
})
const { value: email } = useField('email')
const { value: password } = useField('password')

const showPassword = ref(false)

const onSubmit = handleSubmit((values) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Submitted', JSON.stringify(values, null, 2))
      resolve(null)
    }, 2000)
  })
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
      <form @submit="onSubmit" class="space-y-4">
        <h1 class="text-center text-2xl font-bold text-gray-800">Login</h1>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            v-model="email"
            class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <div v-if="submitCount > 0" class="mt-1 text-sm text-red-600">{{ errors.email }}</div>
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <div class="relative">
            <input
              id="password"
              name="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none"
            >
              <span v-if="showPassword">Hide</span>
              <span v-else>Show</span>
            </button>
          </div>
          <div v-if="submitCount > 0" class="mt-1 text-sm text-red-600">{{ errors.password }}</div>
        </div>
        <div>
          <button
            :disabled="isSubmitting"
            type="submit"
            class="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
