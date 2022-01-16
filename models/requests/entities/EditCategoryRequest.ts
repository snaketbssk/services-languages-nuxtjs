import { IEditCategoryRequest } from '~/models/requests/IEditCategoryRequest'

export class EditCategoryRequest implements IEditCategoryRequest {
  title: string

  constructor (title: string) {
    this.title = title
  }
}
