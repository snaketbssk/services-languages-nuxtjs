import { IPaginationRequest } from '~/models/requests/IPaginationRequest'

export class PaginationRequest implements IPaginationRequest {
  from: number
  to: number
  constructor (
    from: number,
    to: number) {
    this.from = from
    this.to = to
  }
}
