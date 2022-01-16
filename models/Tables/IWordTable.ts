import { ISentenceTable } from '~/models/Tables/ISentenceTable'

export interface IWordTable extends ISentenceTable {
  sentence: string
}
