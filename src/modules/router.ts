// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />

import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router