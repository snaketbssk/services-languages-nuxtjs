import { ICreateWordRequest } from '~/models/requests/ICreateWordRequest'
import { CreateSentenceRequest } from '~/models/requests/entities/CreateSentenceRequest'

export class CreateWordRequest extends CreateSentenceRequest implements ICreateWordRequest {
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
