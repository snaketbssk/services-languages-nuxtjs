import { Guid } from 'guid-typescript'
import { IWordTable } from '~/models/Tables/IWordTable'
import { SentenceTable } from '~/models/Tables/entities/SentenceTable'
import { ICategoryTable } from '~/models/Tables/ICategoryTable'
import { ILanguageTable } from '~/models/Tables/ILanguageTable'

export class WordTable extends SentenceTable implements IWordTable {
  sentence: string

  constructor (
    sentence: string,
    from: string,
    to: string,
    categories: ICategoryTable[],
    languagesPair: ILanguageTable,
    transcription: string,
    createdAt: Date,
    guid: Guid
  ) {
    super(
      from,
      to,
      categories,
      languagesPair,
      transcription,
      createdAt,
      guid)
    this.sentence = sentence
  }
}
