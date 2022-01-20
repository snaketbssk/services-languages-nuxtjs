import { IBaseSelect } from '~/models/selects/IBaseSelect'
import { IItemSelect } from '~/models/selects/IItemSelect'

export class BaseSelect implements IBaseSelect {
  items: IItemSelect[]
  constructor (items: IItemSelect[]) {
    this.items = items
  }

  clear (): void {
    this.items = []
  }
}
