import { IService } from '~/services/IService'
import { services } from '~/services/entities/Service'

let $services: IService

export function initServices (): void {
  $services = services
}

export { $services }
