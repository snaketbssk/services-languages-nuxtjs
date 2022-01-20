import { CreateSentenceRequest } from '~/models/requests/entities/CreateSentenceRequest'
import { IEditWordRequest } from '~/models/requests/IEditWordRequest'

export class EditWordRequest extends CreateSentenceRequest implements IEditWordRequest {
  sentence: string
  constructor (
    sentence: string,
    guidLanguagesPair: string,
    guidCategories: string[],
    from: string,
    to: string,
    transcription: string) {
    super(
      guidLanguagesPair,
      guidCategories,
      from,
      to,
      transcription
    )
    this.sentence = sentence
  }
}
