import type { Middleware } from '@nuxt/types'
import { authStore } from '~/utils/store-accessor'
import { ROUTE } from '~/constants/routes'

const checkGuest: Middleware = ({
  redirect
}) => {
  if (authStore.isAuthenticated) {
    redirect(ROUTE.INDEX)
  }
}

export default checkGuest
