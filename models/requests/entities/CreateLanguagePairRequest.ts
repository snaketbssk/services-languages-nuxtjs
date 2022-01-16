import { ICreateLanguagePairRequest } from '~/models/requests/ICreateLanguagePairRequest'

export class CreateLanguagePairRequest implements ICreateLanguagePairRequest {
  from: string
  to: string

  constructor (
    from: string,
    to: string) {
    this.from = from
    this.to = to
  }
}
