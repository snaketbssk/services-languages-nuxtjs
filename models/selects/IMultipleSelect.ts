import { IBaseSelect } from '~/models/selects/IBaseSelect'

export interface IMultipleSelect extends IBaseSelect {
  select: string[]
}
