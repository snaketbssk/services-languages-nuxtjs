import { BaseSelect } from '~/models/selects/entities/BaseSelect'
import { IMultipleSelect } from '~/models/selects/IMultipleSelect'

export class MultipleSelect extends BaseSelect implements IMultipleSelect {
  select: string[]
  constructor () {
    super([])
    this.select = []
  }
}
