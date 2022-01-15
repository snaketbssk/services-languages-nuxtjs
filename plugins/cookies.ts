import { Plugin } from '@nuxt/types'
import { initializeCookies } from '~/utils/cookies-accessor'

// I know that $cookies is not injected to `Context`
const accessor: Plugin = ({ $cookies }: any): void => {
  initializeCookies($cookies)
}

export default accessor
