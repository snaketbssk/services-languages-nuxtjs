import { Guid } from 'guid-typescript'

export interface ISignUpRequest {
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
}
