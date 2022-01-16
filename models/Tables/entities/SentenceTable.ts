import { Guid } from 'guid-typescript'
import { BaseTable } from '~/models/Tables/entities/BaseTable'
import { ISentenceTable } from '~/models/Tables/ISentenceTable'
import { ICategoryTable } from '~/models/Tables/ICategoryTable'
import { ILanguageTable } from '~/models/Tables/ILanguageTable'

export class SentenceTable extends BaseTable implements ISentenceTable {
  from: string
  to: string
  categories: ICategoryTable[]
  languagesPair: ILanguageTable
  transcription: string
  constructor (
    from: string,
    to: string,
    categories: ICategoryTable[],
    languagesPair: ILanguageTable,
    transcription: string,
    createdAt: Date,
    guid: Guid
  ) {
    super(createdAt, guid)
    this.from = from
    this.to = to
    this.categories = categories
    this.languagesPair = languagesPair
    this.transcription = transcription
  }
}
