import { IBaseSelect } from '~/models/selects/IBaseSelect'
import { IItemSelect } from '~/models/selects/IItemSelect'

export interface ISingleSelect extends IBaseSelect {
  select: IItemSelect
}
