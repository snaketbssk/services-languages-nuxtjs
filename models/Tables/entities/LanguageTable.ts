import { Guid } from 'guid-typescript'
import { BaseTable } from '~/models/Tables/entities/BaseTable'
import { ILanguageTable } from '~/models/Tables/ILanguageTable'

export class LanguageTable extends BaseTable implements ILanguageTable {
  title: string
  constructor () {
    super(new Date(-8640000000000000), Guid.parse(Guid.EMPTY))
    this.title = ''
  }
}
