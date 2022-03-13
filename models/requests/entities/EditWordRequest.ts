import { CreateSentenceRequest } from '~/models/requests/entities/CreateSentenceRequest'
import { IEditWordRequest } from '~/models/requests/IEditWordRequest'

export class EditWordRequest extends CreateSentenceRequest implements IEditWordRequest {
  sentence: string
  constructor (
    sentence: string,
    guidLanguagesPair: string,
    guidCategory: string,
    from: string,
    to: string,
    transcription: string) {
    super(
      guidLanguagesPair,
      guidCategory,
      from,
      to,
      transcription
    )
    this.sentence = sentence
  }
}
