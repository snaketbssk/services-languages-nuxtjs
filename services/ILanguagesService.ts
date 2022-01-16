import { Guid } from 'guid-typescript'
import { ILanguageTable } from '~/models/Tables/ILanguageTable'
import { IEditLanguageRequest } from '~/models/requests/IEditLanguageRequest'
import { ICreateLanguageRequest } from '~/models/requests/ICreateLanguageRequest'
import { ICreateLanguagePairRequest } from '~/models/requests/ICreateLanguagePairRequest'
import { ILanguagePairTable } from '~/models/Tables/ILanguagePairTable'
import { ICategoryTable } from '~/models/Tables/ICategoryTable'
import { IEditCategoryRequest } from '~/models/requests/IEditCategoryRequest'
import { ICreateCategoryRequest } from '~/models/requests/ICreateCategoryRequest'
import { IEditLanguagePairRequest } from '~/models/requests/IEditLanguagePairRequest'
import { IWordTable } from '~/models/Tables/IWordTable'

export interface ILanguagesService {
  createLanguage (createLanguageRequest: ICreateLanguageRequest): Promise<ILanguageTable>
  editLanguage (guid: Guid, editLanguageRequest: IEditLanguageRequest): Promise<ILanguageTable>
  deleteLanguage (guid: Guid): Promise<ILanguageTable>
  getLanguage (guid: Guid): Promise<ILanguageTable>
  getLanguages (): Promise<ILanguageTable[]>
  //
  createLanguagePair (createLanguagePairRequest: ICreateLanguagePairRequest): Promise<ILanguagePairTable>
  editLanguagePair (guid: Guid, editLanguagePairRequest: IEditLanguagePairRequest): Promise<ILanguageTable>
  deleteLanguagePair (guid: Guid): Promise<ILanguagePairTable>
  getLanguagePair (guid: Guid): Promise<ILanguagePairTable>
  getLanguagePairs (): Promise<ILanguagePairTable[]>
  //
  createCategory (createCategoryRequest: ICreateCategoryRequest): Promise<ICategoryTable>
  editCategory (guid: Guid, editCategoryRequest: IEditCategoryRequest): Promise<ICategoryTable>
  deleteCategory (guid: Guid): Promise<ICategoryTable>
  getCategory (guid: Guid): Promise<ICategoryTable>
  getCategories (): Promise<ICategoryTable[]>
  //
  getWords (): Promise<IWordTable[]>
}
