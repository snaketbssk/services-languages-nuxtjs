import { IItemSelect } from '~/models/selects/IItemSelect'

export interface IBaseSelect {
  items: IItemSelect[]

  clear (): void
}
