import { IBaseTable } from '~/models/Tables/IBaseTable'
import { IExpiredAtTable } from '~/models/Tables/IExpiredAtTable'
import { IUpdatedAtTable } from '~/models/Tables/IUpdatedAtTable'

export interface ITokenTable extends IBaseTable, IUpdatedAtTable, IExpiredAtTable {
  isActive: boolean
  token: string
  familyOS: string
  majorOS: string
  familyUserAgent: string
  majorUserAgent: string
  familyDevice: string
  brandDevice: string
  modelDevice: string
  ipAddress: string
}
