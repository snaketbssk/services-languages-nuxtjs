import { Plugin } from '@nuxt/types'
import { $services, initServices } from '~/utils/initServices'

const serviceProviderPlugin: Plugin = ({ app }) => {
  initServices()
  app.provide = $services
}

export default serviceProviderPlugin
