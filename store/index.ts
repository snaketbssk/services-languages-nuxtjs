import { Store } from 'vuex'
import { authStore, initialiseStores } from '~/utils/store-accessor'
import { $cookies } from '~/utils/cookies-accessor'
import { AUTH_COOKIE_NAME } from '~/constants/config'

const initializer = (store: Store<never>): void => initialiseStores(store)
export const plugins = [initializer]

export const actions = {
  async nuxtServerInit (): Promise<void> {
    const token = $cookies.get(AUTH_COOKIE_NAME) ?? null
    authStore.setToken(token)
    if (token) {
      await authStore.fetchAuthedUser()
    }
  }
}

export * from '~/utils/store-accessor'
