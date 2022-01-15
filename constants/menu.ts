// import { Location } from 'vue-router'
// import { ROUTES } from '~/constants/routes'
//
// interface IMenuItem {
//   title: string;
//   icon: string;
//   children: IMenuItem[];
//   route: Location
// }
//
// interface IMenuFolder {
//   title: string;
//   items: IMenuItem[];
// }
//
// export const MENU: IMenuFolder[] = [
//   {
//     title: 'Финансы',
//     items: [
//       {
//         title: 'header.cabinetMenu.pullsPage',
//         icon: 'mdi-wallet-outline',
//         children: [],
//         route: ROUTES.CABINET_PULLS
//       }
//     ]
//   },
//   {
//     title: 'Аккаунт',
//     items: [
//       {
//         title: 'header.cabinetMenu.profilePage',
//         icon: 'mdi-account-outline',
//         children: [],
//         route: ROUTES.CABINET_ACCOUNT_PROFILE
//       },
//       {
//         title: 'header.cabinetMenu.securityPage',
//         icon: 'mdi-lock-outline',
//         children: [],
//         route: ROUTES.CABINET_ACCOUNT_SECURITY
//       },
//       {
//         title: 'header.cabinetMenu.verificationPage',
//         icon: 'mdi-lock-outline',
//         children: [],
//         route: ROUTES.CABINET_ACCOUNT_VERIFY
//       },
//       {
//         title: 'header.cabinetMenu.walletsPage',
//         icon: 'mdi-account-group-outline',
//         children: [],
//         route: ROUTES.CABINET_ACCOUNT_WALLETS
//       },
//       {
//         title: 'header.cabinetMenu.referralPage',
//         icon: 'mdi-account-group-outline',
//         children: [],
//         route: ROUTES.CABINET_ACCOUNT_REFERRAL
//       }
//     ]
//   }
//
// ]
//
// export const ADMIN_MENU: IMenuFolder[] = [
//   {
//     title: 'Главная',
//     items: [
//       {
//         title: 'header.adminMenu.dashboardPage',
//         icon: 'mdi-account-outline',
//         children: [],
//         route: ROUTES.ADMIN_DASHBOARD
//       },
//       {
//         title: 'header.adminMenu.usersPage',
//         icon: 'mdi-account-outline',
//         children: [],
//         route: ROUTES.ADMIN_USERS
//       },
//       {
//         title: 'header.adminMenu.pullsPage',
//         icon: 'mdi-account-outline',
//         children: [],
//         route: ROUTES.ADMIN_PULLS
//       },
//       {
//         title: 'Заявки на вывод',
//         icon: 'mdi-account-outline',
//         children: [],
//         route: ROUTES.ADMIN_WITHDRAWALS
//       },
//       {
//         title: 'Заявки трейдеров',
//         icon: 'mdi-account-outline',
//         children: [],
//         route: ROUTES.ADMIN_TRADERS_REQUESTS
//       },
//       {
//         title: 'Боты',
//         icon: 'mdi-account-outline',
//         children: [],
//         route: ROUTES.ADMIN_BOTS
//       }
//     ]
//   }
// ]
//
// export const HEADER_MENU: IMenuItem[] = [
//   {
//     title: 'header.menu.forInvestorPage',
//     icon: 'mdi-account-outline',
//     children: [],
//     route: ROUTES.PULLS
//   },
//   // {
//   //   title: 'header.menu.forTraderPage',
//   //   icon: 'mdi-account-outline',
//   //   children: [],
//   //   route: ROUTES.TRADER
//   // },
//   {
//     title: 'header.menu.referralPage',
//     icon: 'mdi-account-outline',
//     children: [],
//     route: ROUTES.REFERRAL
//   }
//   // {
//   //   title: 'header.menu.newsPage',
//   //   icon: 'mdi-account-outline',
//   //   children: [],
//   //   route: ROUTES.NEWS
//   // },
//   // {
//   //   title: 'Документы',
//   //   icon: 'mdi-account-outline',
//   //   children: [],
//   //   route: ROUTES.DOCUMENTS
//   // },
// ]
//
// export const FOOTER_MENU: IMenuItem[] = [
//   {
//     title: 'footer.policy',
//     icon: 'mdi-account-outline',
//     children: [],
//     route: ROUTES.PRIVACY
//   },
//   {
//     title: 'footer.cookies',
//     icon: 'mdi-account-outline',
//     children: [],
//     route: ROUTES.COOKIES
//   }
// ]
