import type { LocaleCode } from './i18n'
import { APP_LOCALES } from './i18n'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt-layers-monorepo/layer-core'],

  modules: [
    'nuxt-security',
    '@pinia/nuxt',
    'nuxt-auth-utils',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    // '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/test-utils',
    // '@nuxt/hints',
  ],

  compatibilityDate: '2026-01-23',

  future: {
    compatibilityVersion: 5,
  },

  experimental: {
    nitroAutoImports: true,
  },

  devtools: { enabled: true },

  routeRules: {
    '/api/**': { cors: true },

    '/auth/**': { cors: true, ssr: false },
  },

  runtimeConfig: {
    public: {
      app: {
        name: process.env.NUXT_PUBLIC_APP_NAME,
        url: process.env.NUXT_PUBLIC_APP_URL,
      },

      website: {
        url: process.env.NUXT_PUBLIC_WEBSITE_URL,
      },
    },

    session: {
      password: process.env.NUXT_SESSION_PASSWORD!,
      maxAge: 60 * 60 * 24 * 7, // 1 week
      cookie: {
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      },
    },
  },

  css: ['~/assets/styles/main.css'],

  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      charset: 'utf-8',
      htmlAttrs: {
        lang: process.env.NUXT_PUBLIC_LOCALE_DEFAULT,
      },
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      title: process.env.NUXT_PUBLIC_APP_NAME,
    },

    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  i18n: {
    defaultLocale: process.env.NUXT_PUBLIC_LOCALE_DEFAULT as LocaleCode,
    locales: APP_LOCALES,
    strategy: 'no_prefix',
    // experimental: {
    //   // https://i18n.nuxtjs.org/docs/guide/server-side-translations
    //   localeDetector: 'localeDetector.ts',
    // },
  },

  ui: {
    theme: {
      colors: ['neutral', 'primary', 'info', 'success', 'warning', 'error'],

      defaultVariants: {
        size: 'lg',
      },
    },
  },

  fonts: {
    experimental: {
      disableLocalFallbacks: true,
    },
  },

  icon: {
    mode: 'svg',
  },

  site: {
    indexable: false,
  },

  // TODO: Review security settings before MVP.
  security: {
    headers: {
      contentSecurityPolicy: {
        'base-uri': ["'self'"],
        'img-src': [
          "'self'",
          'data:',
          'blob:',
          ...(process.env.NUXT_PUBLIC_STORAGE_BLOB_URL
            ? [process.env.NUXT_PUBLIC_STORAGE_BLOB_URL]
            : []),
        ],
      },
    },

    rateLimiter: {
      tokensPerInterval: 100,
      interval: 10000,
      headers: false,
      driver: {
        name: 'lruCache',
      },
      throwError: true,
    },
  },
})
