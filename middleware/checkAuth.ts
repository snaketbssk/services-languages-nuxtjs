import type { Middleware } from '@nuxt/types'
import { authStore } from '~/utils/store-accessor'
import { ROUTES } from '~/constants/routes'

const checkAuth: Middleware = ({
  route,
  redirect
}) => {
  if (!authStore.isAuthenticated) {
    redirect(ROUTES.INDEX)
    // redirect({
    //   ...ROUTES.AUTH_LOGIN,
    //   query: {
    //     next: route.fullPath
    //   }
    // });
    // $services[ServiceTokens.AppNotificationService].showAppNotification({
    //   text: 'Нам не удалось вас авторизовать. Перезайдите в свой аккаунт',
    //   color: AppNotificationColor.WARNING,
    // });
  }
}

export default checkAuth
