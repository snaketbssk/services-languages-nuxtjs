import { ICreateWordRequest } from '~/models/requests/ICreateWordRequest'
import { CreateSentenceRequest } from '~/models/requests/entities/CreateSentenceRequest'

export class CreateWordRequest extends CreateSentenceRequest implements ICreateWordRequest {
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
