import { Guid } from 'guid-typescript'
import { ITokenTable } from '~/models/Tables/ITokenTable'
import { BaseTable } from '~/models/Tables/entities/BaseTable'

export class TokenTable extends BaseTable implements ITokenTable {
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
  updateAt: Date
  expiredAt: Date
  constructor (
    isActive: boolean,
    token: string,
    familyOS: string,
    majorOS: string,
    familyUserAgent: string,
    majorUserAgent: string,
    familyDevice: string,
    brandDevice: string,
    modelDevice: string,
    ipAddress: string,
    createdAt: Date,
    updateAt: Date,
    expiredAt: Date,
    guid: Guid
  ) {
    super(createdAt, guid)
    this.isActive = isActive
    this.token = token
    this.familyOS = familyOS
    this.majorOS = majorOS
    this.familyUserAgent = familyUserAgent
    this.majorUserAgent = majorUserAgent
    this.familyDevice = familyDevice
    this.brandDevice = brandDevice
    this.modelDevice = modelDevice
    this.ipAddress = ipAddress
    this.updateAt = updateAt
    this.expiredAt = expiredAt
  }
}
