import { ICreateLanguageRequest } from '~/models/requests/ICreateLanguageRequest'

export class CreateLanguageRequest implements ICreateLanguageRequest {
  title: string

  constructor (title: string) {
    this.title = title
  }
}
