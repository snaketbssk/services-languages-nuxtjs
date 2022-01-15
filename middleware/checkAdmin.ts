import type { Middleware } from '@nuxt/types'
import { authStore } from '~/utils/store-accessor'

const checkAdmin: Middleware = ({
  redirect
}) => {
  console.log('checkAdmin')
  if (!authStore.isAdmin) {
    redirect('/')
    // $services[ServiceToken.AppNotificationService].showAppNotification({
    //   text: 'У вас недосдаточно прав для просмотра этой страницы',
    //   color: AppNotificationColor.WARNING
    // })
  }
}

export default checkAdmin
