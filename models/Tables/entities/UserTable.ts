import { Guid } from 'guid-typescript'
import { BaseTable } from '~/models/Tables/entities/BaseTable'
import { IUserTable } from '~/models/Tables/IUserTable'
import { LanguageUserTableEnum } from '~/models/enums/LanguageUserTableEnum'
import { RoleUserTableEnum } from '~/models/enums/RoleUserTableEnum'

export class UserTable extends BaseTable implements IUserTable {
  login: string
  email: string
  firstName: string
  middleName: string
  lastName: string
  phone: string
  role: RoleUserTableEnum
  language: LanguageUserTableEnum
  confirmEmail: boolean
  confirmTFA: boolean
  updateAt: Date
  constructor (
    login: string,
    email: string,
    firstName: string,
    middleName: string,
    lastName: string,
    phone: string,
    role: RoleUserTableEnum,
    language: number,
    confirmEmail: boolean,
    confirmTFA: boolean,
    createdAt: Date,
    updateAt: Date,
    guid: Guid) {
    super(createdAt, guid)
    this.login = login
    this.email = email
    this.firstName = firstName
    this.middleName = middleName
    this.lastName = lastName
    this.phone = phone
    this.role = role
    this.language = language
    this.confirmEmail = confirmEmail
    this.confirmTFA = confirmTFA
    this.updateAt = updateAt
  }
}
