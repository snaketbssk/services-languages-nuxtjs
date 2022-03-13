import { ISignInRequest } from '~/models/requests/ISignInRequest'

export class SignInRequest implements ISignInRequest {
  loginOrEmail: string
  password: string
  codeTFA: string
  constructor (
    loginOrEmail: string,
    password: string,
    codeTFA: string) {
    this.loginOrEmail = loginOrEmail
    this.password = password
    this.codeTFA = codeTFA
  }
}
