// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $meta: { name: 'core' },

  components: [{ path: '#layers/core/app/components', prefix: 'Core' }],

  modules: ['@nuxt/eslint', '@nuxt/test-utils'],

  devtools: { enabled: true },

  compatibilityDate: '2025-12-12',
})
