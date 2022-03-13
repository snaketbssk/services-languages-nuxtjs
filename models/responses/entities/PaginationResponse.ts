import { IPaginationResponse } from '~/models/responses/IPaginationResponse'

export class PaginationResponse<T> implements IPaginationResponse<T> {
  totalCount: number
  values: T[]
  constructor (
    totalCount: number,
    values: T[]) {
    this.totalCount = totalCount
    this.values = values
  }
}
