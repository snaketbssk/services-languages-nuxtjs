import { IItemSelect } from '~/models/selects/IItemSelect'

export class ItemSelect implements IItemSelect {
  text: string
  value: string
  constructor (
    text: string,
    value: string) {
    this.text = text
    this.value = value
  }
}
