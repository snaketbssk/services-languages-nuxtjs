import { IService } from '~/services/IService'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { IdentityService } from '~/services/entities/IdentityService'
import { LanguagesService } from '~/services/entities/LanguagesService'

export const services: IService = {
  [ServiceEnum.Identity]: new IdentityService(),
  [ServiceEnum.Languages]: new LanguagesService()
}
