import type { Middleware } from '@nuxt/types'
import { authStore } from '~/utils/store-accessor'

const checkAuth: Middleware = ({
  route,
  redirect
}) => {
  if (!authStore.isAuthenticated) {
    redirect('/')
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
