import { IEditLanguagePairRequest } from '~/models/requests/IEditLanguagePairRequest'

export class EditLanguagePairRequest implements IEditLanguagePairRequest {
  from: string
  to: string

  constructor (
    from: string,
    to: string) {
    this.from = from
    this.to = to
  }
}
