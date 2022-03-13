import { ICreateSentenceRequest } from '~/models/requests/ICreateSentenceRequest'

export class CreateSentenceRequest implements ICreateSentenceRequest {
  guidLanguagesPair: string
  guidCategory: string
  from: string
  to: string
  transcription: string
  constructor (
    guidLanguagesPair: string,
    guidCategory: string,
    from: string,
    to: string,
    transcription: string) {
    this.guidLanguagesPair = guidLanguagesPair
    this.guidCategory = guidCategory
    this.from = from
    this.to = to
    this.transcription = transcription
  }
}
