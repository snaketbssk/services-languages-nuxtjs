import { Guid } from 'guid-typescript'
import { IBaseTable } from '~/models/Tables/IBaseTable'

export interface ILanguagePairTable extends IBaseTable {
  from: Guid
  to: Guid
}
