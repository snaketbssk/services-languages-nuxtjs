import type { Middleware } from '@nuxt/types'
import { authStore } from '~/utils/store-accessor'
import { ROUTE } from '~/constants/routes'

const checkAuth: Middleware = ({
  redirect
}) => {
  if (!authStore.isAdmin) {
    redirect(ROUTE.INDEX)
    // $services[ServiceTokens.AppNotificationService].showAppNotification({
    //   text: 'У вас недосдаточно прав для просмотра этой страницы',
    //   color: AppNotificationColor.WARNING,
    // });
  }
}

export default checkAuth
