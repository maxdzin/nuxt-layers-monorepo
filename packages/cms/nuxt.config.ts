// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/hints', '@nuxt/test-utils', '@nuxt/ui'],

  compatibilityDate: '2025-12-12',

  devtools: { enabled: true },
})
