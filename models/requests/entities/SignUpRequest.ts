import { Guid } from 'guid-typescript'
import { ISignUpRequest } from '~/models/requests/ISignUpRequest'
import { LanguageUserTableEnum } from '~/models/enums/LanguageUserTableEnum'

export class SignUpRequest implements ISignUpRequest {
  login: string
  email: string
  password: string
  confirmPassword: string
  firstName: string
  middleName: string
  lastName: string
  phone: string
  language: number
  referral: Guid | null

  constructor () {
    this.login = ''
    this.email = ''
    this.password = ''
    this.confirmPassword = ''
    this.firstName = ''
    this.middleName = ''
    this.lastName = ''
    this.phone = ''
    this.language = LanguageUserTableEnum.En
    this.referral = null
  }
}
