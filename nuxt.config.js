import colors from 'vuetify/es5/util/colors'
import serviceConfiguration from './appsettings/appsettings.services.json'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  // appSettings: new AppSettings(),

  ssr: true,

  generate: {
    dir: 'docker/dist'
  },

  server: {
    host: '0.0.0.0', // '185.170.215.219', // '10.0.0.2',
    port: 3000
  },

  head: {
    titleTemplate: '%s - services-languages-nuxtjs',
    title: 'services-languages-nuxtjs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/cookies',
    '~/plugins/service-provider',
    '~/plugins/axios-accessor'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // '@nuxtjs/i18n',
    '@nuxtjs/yandex-metrika'
  ],

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/',
      callback: '/callback'
    },
    strategies: {
      google: {
        client_id: '477668702814-oscrg3biq904udq13n2id31kgacch8kp.apps.googleusercontent.com'
      }
    }
  },

  yandexMetrika: {
    id: serviceConfiguration.idYandexMetrika,
    webvisor: true,
    clickmap: true,
    useCDN: false,
    trackLinks: true,
    accurateTrackBounce: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
    // proxyHeaders: false
    proxy: true
  },
  proxy: {
    '/identity_api/': { target: serviceConfiguration.identityApiBaseUrl, changeOrigin: true, pathRewrite: { '^/identity_api/': '/api/' }, secure: false },
    '/languages_api/': { target: serviceConfiguration.languagesApiBaseUrl, changeOrigin: true, pathRewrite: { '^/languages_api/': '/api/' }, secure: false }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#3f51b5',
          secondary: '#44ab29',
          accent: '#8c9eff',
          error: '#b71c1c'
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
