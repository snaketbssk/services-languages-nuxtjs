export interface ICreateSentenceRequest {
  guidLanguagesPair: string
  guidCategories: string[]
  from: string
  to: string
  transcription: string
}
