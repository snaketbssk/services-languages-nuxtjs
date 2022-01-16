import { ICreateSentenceRequest } from '~/models/requests/ICreateSentenceRequest'

export interface ICreateWordRequest extends ICreateSentenceRequest {
  sentence: string
}
