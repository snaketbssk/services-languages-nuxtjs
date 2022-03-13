import { IBaseTable } from '~/models/Tables/IBaseTable'
import { ICategoryTable } from '~/models/Tables/ICategoryTable'
import { ILanguageTable } from '~/models/Tables/ILanguageTable'

export interface ISentenceTable extends IBaseTable {
  from: string
  to: string
  transcription: string
  category: ICategoryTable
  languagesPair: ILanguageTable
}
