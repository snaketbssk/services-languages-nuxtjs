import { ICreateSentenceRequest } from '~/models/requests/ICreateSentenceRequest'

export class CreateSentenceRequest implements ICreateSentenceRequest {
  guidLanguagesPair: string
  guidCategories: string[]
  from: string
  to: string
  transcription: string
  constructor (
    guidLanguagesPair: string,
    guidCategories: string[],
    from: string,
    to: string,
    transcription: string) {
    this.guidLanguagesPair = guidLanguagesPair
    this.guidCategories = guidCategories
    this.from = from
    this.to = to
    this.transcription = transcription
  }
}
