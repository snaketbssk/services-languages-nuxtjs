import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { IIdentityService } from '~/services/IIdentityService'
import { ILanguagesService } from '~/services/ILanguagesService'

export class IService {
  [ServiceEnum.Identity]: IIdentityService
  [ServiceEnum.Languages]: ILanguagesService
}
