import https from 'https'
import { Guid } from 'guid-typescript'
import { ILanguagesService } from '~/services/ILanguagesService'
import { REJECT_UNAUTHORIZED } from '~/constants/config'
import { $axios } from '~/utils/httpClient'
import { ILanguageTable } from '~/models/Tables/ILanguageTable'
import { IEditLanguageRequest } from '~/models/requests/IEditLanguageRequest'
import { ICreateLanguageRequest } from '~/models/requests/ICreateLanguageRequest'
import { ILanguagePairTable } from '~/models/Tables/ILanguagePairTable'
import { ICreateLanguagePairRequest } from '~/models/requests/ICreateLanguagePairRequest'
import { ICategoryTable } from '~/models/Tables/ICategoryTable'
import { ICreateCategoryRequest } from '~/models/requests/ICreateCategoryRequest'
import { IEditCategoryRequest } from '~/models/requests/IEditCategoryRequest'
import { IEditLanguagePairRequest } from '~/models/requests/IEditLanguagePairRequest'
import { IWordTable } from '~/models/Tables/IWordTable'

export class LanguagesService implements ILanguagesService {
  config (): Object {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: REJECT_UNAUTHORIZED
    })
    const result = {
      httpsAgent
    }
    return result
  }

  public async createLanguage (createLanguageRequest: ICreateLanguageRequest): Promise<ILanguageTable> {
    const { data } = await $axios.put(
      'https://localhost:16443/api/Language',
      createLanguageRequest,
      this.config())
    return data
  }

  public async editLanguage (guid: Guid, editLanguageRequest: IEditLanguageRequest): Promise<ILanguageTable> {
    const { data } = await $axios.patch(
      `https://localhost:16443/api/Language/${guid.toString()}`,
      editLanguageRequest,
      this.config())
    return data
  }

  public async deleteLanguage (guid: Guid): Promise<ILanguageTable> {
    const { data } = await $axios.delete(`https://localhost:16443/api/Language/${guid.toString()}`, this.config())
    return data
  }

  public async getLanguage (guid: Guid): Promise<ILanguageTable> {
    const { data } = await $axios.get(`https://localhost:16443/api/Language/${guid.toString()}`, this.config())
    return data
  }

  public async getLanguages (): Promise<ILanguageTable[]> {
    const { data } = await $axios.get('https://localhost:16443/api/Languages', this.config())
    return data
  }

  public async createLanguagePair (createLanguagePairRequest: ICreateLanguagePairRequest): Promise<ILanguagePairTable> {
    const { data } = await $axios.put(
      'https://localhost:16443/api/LanguagesPair',
      createLanguagePairRequest,
      this.config())
    return data
  }

  public async deleteLanguagePair (guid: Guid): Promise<ILanguagePairTable> {
    const { data } = await $axios.delete(`https://localhost:16443/api/LanguagesPair/${guid.toString()}`, this.config())
    return data
  }

  public async editLanguagePair (guid: Guid, editLanguagePairRequest: IEditLanguagePairRequest): Promise<ILanguageTable> {
    const { data } = await $axios.patch(
      `https://localhost:16443/api/LanguagesPair/${guid.toString()}`,
      editLanguagePairRequest,
      this.config())
    return data
  }

  public async getLanguagePair (guid: Guid): Promise<ILanguagePairTable> {
    const { data } = await $axios.get(`https://localhost:16443/api/LanguagesPair/${guid.toString()}`, this.config())
    return data
  }

  public async getLanguagePairs (): Promise<ILanguagePairTable[]> {
    const { data } = await $axios.get('https://localhost:16443/api/LanguagesPairs', this.config())
    return data
  }

  public async createCategory (createCategoryRequest: ICreateCategoryRequest): Promise<ICategoryTable> {
    const { data } = await $axios.put(
      'https://localhost:16443/api/Category',
      createCategoryRequest,
      this.config())
    return data
  }

  public async editCategory (guid: Guid, editCategoryRequest: IEditCategoryRequest): Promise<ICategoryTable> {
    const { data } = await $axios.patch(
      `https://localhost:16443/api/Category/${guid.toString()}`,
      editCategoryRequest,
      this.config())
    return data
  }

  public async getCategory (guid: Guid): Promise<ICategoryTable> {
    const { data } = await $axios.get(`https://localhost:16443/api/Category/${guid.toString()}`, this.config())
    return data
  }

  public async deleteCategory (guid: Guid): Promise<ICategoryTable> {
    const { data } = await $axios.delete(`https://localhost:16443/api/Category/${guid.toString()}`, this.config())
    return data
  }

  public async getCategories (): Promise<ICategoryTable[]> {
    const { data } = await $axios.get('https://localhost:16443/api/Categories', this.config())
    return data
  }

  public async getWords (): Promise<IWordTable[]> {
    const { data } = await $axios.get('https://localhost:16443/api/Words', this.config())
    return data
  }
}
