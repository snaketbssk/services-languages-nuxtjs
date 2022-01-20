import { Guid } from 'guid-typescript'
import { ILanguagesService } from '~/services/ILanguagesService'
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
import { LANGUAGES_SERVICE_API } from '~/constants/config'
import { ICreateWordRequest } from '~/models/requests/ICreateWordRequest'
import { IEditWordRequest } from '~/models/requests/IEditWordRequest'

export class LanguagesService implements ILanguagesService {
  public async createLanguage (createLanguageRequest: ICreateLanguageRequest): Promise<ILanguageTable> {
    const { data } = await $axios.put(
      'https://localhost:16443/api/Language',
      createLanguageRequest)
    return data
  }

  public async editLanguage (guid: Guid, editLanguageRequest: IEditLanguageRequest): Promise<ILanguageTable> {
    const { data } = await $axios.patch(
      `/${LANGUAGES_SERVICE_API}/Language/${guid.toString()}`,
      editLanguageRequest)
    return data
  }

  public async deleteLanguage (guid: Guid): Promise<ILanguageTable> {
    const { data } = await $axios.delete(`/${LANGUAGES_SERVICE_API}/Language/${guid.toString()}`)
    return data
  }

  public async getLanguage (guid: Guid): Promise<ILanguageTable> {
    const { data } = await $axios.get(`/${LANGUAGES_SERVICE_API}/Language/${guid.toString()}`)
    return data
  }

  public async getLanguages (): Promise<ILanguageTable[]> {
    const { data } = await $axios.get(`/${LANGUAGES_SERVICE_API}/Languages`)
    return data
  }

  public async createLanguagePair (createLanguagePairRequest: ICreateLanguagePairRequest): Promise<ILanguagePairTable> {
    const { data } = await $axios.put(`/${LANGUAGES_SERVICE_API}/LanguagesPair`, createLanguagePairRequest)
    return data
  }

  public async deleteLanguagePair (guid: Guid): Promise<ILanguagePairTable> {
    const { data } = await $axios.delete(`/${LANGUAGES_SERVICE_API}/LanguagesPair/${guid.toString()}`)
    return data
  }

  public async editLanguagePair (guid: Guid, editLanguagePairRequest: IEditLanguagePairRequest): Promise<ILanguageTable> {
    const { data } = await $axios.patch(
      `/${LANGUAGES_SERVICE_API}/LanguagesPair/${guid.toString()}`,
      editLanguagePairRequest)
    return data
  }

  public async getLanguagePair (guid: Guid): Promise<ILanguagePairTable> {
    const { data } = await $axios.get(`/${LANGUAGES_SERVICE_API}/LanguagesPair/${guid.toString()}`)
    return data
  }

  public async getLanguagePairs (): Promise<ILanguagePairTable[]> {
    const { data } = await $axios.get(`/${LANGUAGES_SERVICE_API}/LanguagesPairs`)
    return data
  }

  public async createCategory (createCategoryRequest: ICreateCategoryRequest): Promise<ICategoryTable> {
    const { data } = await $axios.put(`/${LANGUAGES_SERVICE_API}/Category`, createCategoryRequest)
    return data
  }

  public async editCategory (guid: Guid, editCategoryRequest: IEditCategoryRequest): Promise<ICategoryTable> {
    const { data } = await $axios.patch(`/${LANGUAGES_SERVICE_API}/Category/${guid.toString()}`, editCategoryRequest)
    return data
  }

  public async getCategory (guid: Guid): Promise<ICategoryTable> {
    const { data } = await $axios.get(`/${LANGUAGES_SERVICE_API}/Category/${guid.toString()}`)
    return data
  }

  public async deleteCategory (guid: Guid): Promise<ICategoryTable> {
    const { data } = await $axios.delete(`/${LANGUAGES_SERVICE_API}/Category/${guid.toString()}`)
    return data
  }

  public async getCategories (): Promise<ICategoryTable[]> {
    const { data } = await $axios.get(`/${LANGUAGES_SERVICE_API}/Categories`)
    return data
  }

  public async createWord (createWordRequest: ICreateWordRequest): Promise<IWordTable> {
    const { data } = await $axios.put(`/${LANGUAGES_SERVICE_API}/Word`, createWordRequest)
    return data
  }

  public async editWord (guid: Guid, editWordRequest: IEditWordRequest): Promise<IWordTable> {
    const { data } = await $axios.patch(`/${LANGUAGES_SERVICE_API}/Word/${guid.toString()}`, editWordRequest)
    return data
  }

  public async getWord (guid: Guid): Promise<IWordTable> {
    const { data } = await $axios.get(`/${LANGUAGES_SERVICE_API}/Word/${guid.toString()}`)
    return data
  }

  public async deleteWord (guid: Guid): Promise<IWordTable> {
    const { data } = await $axios.delete(`/${LANGUAGES_SERVICE_API}/Word/${guid.toString()}`)
    return data
  }

  public async getWords (): Promise<IWordTable[]> {
    const { data } = await $axios.get(`/${LANGUAGES_SERVICE_API}/Words`)
    return data
  }
}
