import type { Middleware } from '@nuxt/types'
import { authStore } from '~/utils/store-accessor'

const checkGuest: Middleware = ({
  redirect
}) => {
  console.log('checkGuest')
  if (authStore.isAuthenticated) {
    redirect('/')
  }
}

export default checkGuest
