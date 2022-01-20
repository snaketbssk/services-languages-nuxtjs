import { ICreateSentenceRequest } from '~/models/requests/ICreateSentenceRequest'

export interface IEditWordRequest extends ICreateSentenceRequest {
  sentence: string
}
