import { Guid } from 'guid-typescript'
import { BaseTable } from '~/models/Tables/entities/BaseTable'
import { ICategoryTable } from '~/models/Tables/ICategoryTable'

export class CategoryTable extends BaseTable implements ICategoryTable {
  title: string
  constructor () {
    super(new Date(-8640000000000000), Guid.parse(Guid.EMPTY))
    this.title = ''
  }
}
