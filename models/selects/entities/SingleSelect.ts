import { ISingleSelect } from '~/models/selects/ISingleSelect'
import { BaseSelect } from '~/models/selects/entities/BaseSelect'
import { IItemSelect } from '~/models/selects/IItemSelect'
import { ItemSelect } from '~/models/selects/entities/ItemSelect'

export class SingleSelect extends BaseSelect implements ISingleSelect {
  select: IItemSelect
  constructor () {
    super([])
    this.select = new ItemSelect('', '')
  }
}
