import { ISignInRequest } from '~/models/requests/ISignInRequest'

export class SignInRequest implements ISignInRequest {
  codeTFA: string
  loginOrEmail: string
  password: string

  constructor () {
    this.codeTFA = ''
    this.loginOrEmail = ''
    this.password = ''
  }
}
