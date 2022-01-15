import * as https from 'https'
import { IIdentityService } from '~/services/IIdentityService'
import { ISignUpRequest } from '~/models/requests/ISignUpRequest'
import { $axios } from '~/utils/httpClient'
import { ISignInRequest } from '~/models/requests/ISignInRequest'
import { ITokenTable } from '~/models/Tables/ITokenTable'
import { IUserTable } from '~/models/Tables/IUserTable'
import { REJECT_UNAUTHORIZED } from '~/constants/config'

export class IdentityService implements IIdentityService {
  config (): Object {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: REJECT_UNAUTHORIZED
    })
    const result = {
      httpsAgent
    }
    return result
  }

  public async getUser (): Promise<IUserTable> {
    const { data } = await $axios.get('https://10.0.0.1:10443/api/User', this.config())
    return data
  }

  public async signIn (request: ISignInRequest): Promise<ITokenTable> {
    const { data } = await $axios.put('https://10.0.0.1:10443/api/Token', request)
    return data
  }

  public async signUp (request: ISignUpRequest): Promise<IUserTable> {
    const { data } = await $axios.put('https://10.0.0.1:10443/api/User', request)
    return data
  }
}
