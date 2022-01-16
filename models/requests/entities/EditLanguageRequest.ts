import { IEditLanguageRequest } from '~/models/requests/IEditLanguageRequest'

export class EditLanguageRequest implements IEditLanguageRequest {
  title: string

  constructor (title: string) {
    this.title = title
  }
}
