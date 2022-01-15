// import Vue from 'vue'
// import VueI18n from '@nuxtjs/i18n'
// import { Plugin } from '@nuxt/types'
// import { localeStore } from '~/utils/store-accessor'
// import { DEFAULT_LOCALE } from '~/constants/config'
//
// Vue.use(VueI18n)
//
// declare module '@nuxt/types' {
//   // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
//   interface NuxtAppOptions {
//     $i18n: VueI18n;
//   }
//
//   // nuxtContext.$myInjectedFunction
//   interface Context {
//     $i18n: VueI18n;
//   }
// }
//
// declare module 'vuex/types/index' {
//   // this.$myInjectedFunction inside Vuex stores
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   interface Store<S> {
//     $i18n: typeof VueI18n;
//   }
// }
//
// const i18nPlugin: Plugin = async ({ app }) => {
//   const fallbackLocale = DEFAULT_LOCALE
//   const defaultMessages = await import(`~/locales/${fallbackLocale}.json`)
//
//   const locale = localeStore.locale
//
//   const messages = {
//     [DEFAULT_LOCALE]: defaultMessages
//   }
//
//   if (fallbackLocale !== locale) {
//     messages[locale] = await import(/* webpackChunkName: "lang-[request]" */ `~/locales/${locale}.json`)
//   }
//
//   app.i18n = new VueI18n({
//     locale,
//     fallbackLocale,
//     messages
//   })
// }
//
// export default i18nPlugin
