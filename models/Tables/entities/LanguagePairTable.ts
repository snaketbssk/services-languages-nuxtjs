import { Guid } from 'guid-typescript'
import { BaseTable } from '~/models/Tables/entities/BaseTable'
import { ILanguagePairTable } from '~/models/Tables/ILanguagePairTable'

export class LanguagePairTable extends BaseTable implements ILanguagePairTable {
  from: Guid
  to: Guid
  constructor (
    from: Guid,
    to: Guid
  ) {
    super(new Date(-8640000000000000), Guid.parse(Guid.EMPTY))
    this.from = from
    this.to = to
  }
}
