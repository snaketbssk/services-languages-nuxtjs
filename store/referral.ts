// import { Action, config, Module, Mutation, VuexModule } from 'vuex-module-decorators'
// import { ReferralLevel } from '~/types/models/ReferralLevel'
// import { $services } from '~/utils/initServices'
// import { ServiceTokens } from '~/services'
// import { AppNotificationColor } from '~/types/common/AppNotification'
//
// config.rawError = true
//
// @Module({
//   name: 'referral',
//   stateFactory: true,
//   namespaced: true
// })
// export default class ReferralModule extends VuexModule {
//   referralLevel: ReferralLevel = {
//     level: 0,
//     percent: 1,
//     amount: 0,
//     options: []
//   }
//
//   levels: ReferralLevel[] = []
//
//   get nextLevel (): ReferralLevel | null {
//     return this.levels.find(l => l.level === this.referralLevel.level + 1) ?? null
//   }
//
//   @Mutation
//   setReferralLevel (referralLevel: ReferralLevel): void {
//     this.referralLevel = referralLevel
//   }
//
//   @Mutation
//   setLevels (levels: ReferralLevel[]): void {
//     this.levels = levels
//   }
//
//   @Action
//   async fetchReferralLevel (): Promise<void> {
//     try {
//       const level = await $services[ServiceTokens.IdentityService].getUsersReferralLevel()
//       this.setReferralLevel(level)
//     } catch (e) {
//       $services[ServiceTokens.AppNotificationService].showAppNotification({
//         text: e.message,
//         color: AppNotificationColor.ERROR
//       })
//     }
//   }
//
//   @Action
//   async fetchReferralLevels (): Promise<void> {
//     try {
//       const levels = await $services[ServiceTokens.IdentityService].getReferralLevels()
//       this.setLevels(levels)
//     } catch (e) {
//       $services[ServiceTokens.AppNotificationService].showAppNotification({
//         text: e.message,
//         color: AppNotificationColor.ERROR
//       })
//     }
//   }
// }
