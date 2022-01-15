import { IBaseTable } from '~/models/Tables/IBaseTable'
import { RoleUserTableEnum } from '~/models/enums/RoleUserTableEnum'
import { LanguageUserTableEnum } from '~/models/enums/LanguageUserTableEnum'
import { IUpdatedAtTable } from '~/models/Tables/IUpdatedAtTable'

export interface IUserTable extends IBaseTable, IUpdatedAtTable {
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
}
