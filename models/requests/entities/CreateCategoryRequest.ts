import { ICreateCategoryRequest } from '~/models/requests/ICreateCategoryRequest'

export class CreateCategoryRequest implements ICreateCategoryRequest {
  title: string

  constructor (title: string) {
    this.title = title
  }
}
