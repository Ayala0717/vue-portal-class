// vite-env.d.ts
/// <reference types="vite-plugin-pages/client" />

import {
  RouteLocationNormalized,
  createRouter,
  createWebHistory
} from 'vue-router'
import routes from 'virtual:generated-pages'

const router = createRouter({
  history: createWebHistory(),
  routes
})

const authorize = (to: RouteLocationNormalized) => {
  const authorized = to.meta.authorize

  if (authorized[0] === '*') return true
}

router.beforeEach(async (to) => {
  const auth = false

  if (auth) {
    if (to.name === 'login') return 'home'

    return true
  } else {
    if (to.meta.auth) return '/login'

    return true
  }
})

export default router
