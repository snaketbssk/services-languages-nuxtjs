import { Guid } from 'guid-typescript'

export interface IBaseTable {
  createdAt: Date
  guid: Guid
}
