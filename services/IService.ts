import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { IIdentityService } from '~/services/IIdentityService'

export class IService {
  [ServiceEnum.Identity]: IIdentityService
}
