import type { Middleware } from '@nuxt/types'
import { authStore } from '~/utils/store-accessor'
import { ROUTES } from '~/constants/routes'

const checkGuest: Middleware = ({
  redirect
}) => {
  if (authStore.isAuthenticated) {
    redirect(ROUTES.INDEX)
  }
}

export default checkGuest
