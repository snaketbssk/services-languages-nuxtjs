import { IService } from '~/services/IService'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { IdentityService } from '~/services/entities/IdentityService'

export const services: IService = {
  [ServiceEnum.Identity]: new IdentityService()
}
