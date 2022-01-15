import { ISignUpRequest } from '~/models/requests/ISignUpRequest'
import { ISignInRequest } from '~/models/requests/ISignInRequest'
import { ITokenTable } from '~/models/Tables/ITokenTable'
import { IUserTable } from '~/models/Tables/IUserTable'

export interface IIdentityService {
  getUser (): Promise<IUserTable>
  signIn (request: ISignInRequest): Promise<ITokenTable>
  signUp (request: ISignUpRequest): Promise<IUserTable>
}
