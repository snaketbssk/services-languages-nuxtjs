// import { StatusCodes } from 'http-status-codes'
import type { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/httpClient'
import { authStore } from '~/utils/store-accessor'

// @ts-ignore
const accessor: Plugin = ({ $axios, app: { router }, $routes, route }) => {
  $axios.onRequest((request) => {
    request.headers.common.Locale = 'en'
    if (authStore.isAuthenticated) {
      request.headers.common['X-Token'] = authStore.token
    }
    // request.headers.common.Locale = localeStore.locale;
    return request
  })

  initializeAxios($axios)
}

export default accessor
