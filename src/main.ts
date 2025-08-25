//import './assets/main.css'

import { createApp as createVueApp } from 'vue'
import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'
import { createRouterInstance, routes } from './router'
import { createI18nInstance } from './i18n'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(router)
    app.use(createI18nInstance())
    app.use(createHead())
  }
)
