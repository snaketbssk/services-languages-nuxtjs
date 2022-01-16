import type { Middleware } from '@nuxt/types'
import { authStore } from '~/utils/store-accessor'

const checkGuest: Middleware = ({
  redirect
}) => {
  if (authStore.isAuthenticated) {
    redirect('/')
  }
}

export default checkGuest
