import { Guid } from 'guid-typescript'
import { IBaseTable } from '~/models/Tables/IBaseTable'

export class BaseTable implements IBaseTable {
  public createdAt: Date
  public guid: Guid
  constructor (
    createdAt: Date,
    guid: Guid) {
    this.createdAt = createdAt
    this.guid = guid
  }
}
