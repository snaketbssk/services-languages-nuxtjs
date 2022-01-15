// import { config, Module, Mutation, VuexModule } from 'vuex-module-decorators'
// import { ILocale } from '~/types/interfaces/ILocale'
// import { $cookies } from '~/utils/cookies-accessor'
// import { DEFAULT_LOCALE, LOCALES_LIST } from '~/constants/config'
//
// config.rawError = true
//
// @Module({
//   name: 'locale',
//   stateFactory: true,
//   namespaced: true
// })
// export default class LocaleModule extends VuexModule {
//   locale = DEFAULT_LOCALE
//
//   locales: ILocale[] = LOCALES_LIST
//
//   get availableLocales (): ILocale[] {
//     return this.locales.filter(locale => locale.code !== this.locale)
//   }
//
//   @Mutation
//   setLocale (locale: string): void {
//     this.locale = locale
//
//     if (!process.server) {
//       $cookies.set('locale', locale, {
//         path: '/',
//         secure: true,
//         sameSite: true
//       })
//     }
//   }
// }
