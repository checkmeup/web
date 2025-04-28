import { createApp } from 'vue'
import { router } from './providers'
import app from './app.vue'

export const application = createApp(app).use(router)
