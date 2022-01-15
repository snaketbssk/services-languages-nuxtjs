import type { Middleware } from '@nuxt/types'
import { authStore } from '~/utils/store-accessor'

const checkAuth: Middleware = ({
  redirect
}) => {
  console.log('checkAuth')
  if (!authStore.isAuthenticated) {
    redirect('/')
  }
}

export default checkAuth
