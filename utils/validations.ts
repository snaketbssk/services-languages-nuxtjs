import { TranslateResult } from 'vue-i18n'

const required = (value: any): boolean | string | TranslateResult => (value !== null && value !== undefined && value !== '') || 'Обязательно для заполнения'

const gtz = (value: any): boolean | string | TranslateResult => Number(value) > 0 || 'Должно быть больше 0'

const gt = (gtValue: any): Function => (value: any): boolean | string | TranslateResult => Number(value) > gtValue || `Должно быть больше ${gtValue}`

const lt = (ltValue: any): Function => (value: any): boolean | string | TranslateResult => Number(value) < ltValue || `Должно быть меньше ${ltValue}`

const gte = (gtValue: any): Function => (value: any): boolean | string | TranslateResult => Number(value) >= gtValue || `Должно быть больше или равно ${gtValue}`

const lte = (ltValue: any): Function => (value: any): boolean | string | TranslateResult => Number(value) <= ltValue || `Должно быть меньше или равно ${ltValue}`

const lengthGt = (gtValue: any): Function => (value: any): boolean | string | TranslateResult => (!!value && value.length > gtValue) || `Должно быть больше ${gtValue}`

const lengthLt = (ltValue: any): Function => (value: any): boolean | string | TranslateResult => (!!value && value.length < ltValue) || `Должно быть меньше ${ltValue}`

const lengthGte = (gteValue: any): Function => (value: any): boolean | string | TranslateResult => (!!value && value.length >= gteValue) || `Должно быть больше или равно ${gteValue} символов`

const lengthLte = (lteValue: any): Function => (value: any): boolean | string | TranslateResult => (!!value && value.length <= lteValue) || `Должно быть меньше или равно ${lteValue} символов`

const email = (value: any): boolean | string | TranslateResult => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) || 'Неправильный формат email'

const login = (value: any): boolean | string | TranslateResult => /^[\w.-]{0,19}[0-9a-zA-Z]$/.test(value) || 'Неправильный формат логина'

const sameAs = (sameValue: any, field: string | TranslateResult): Function => (value: any): boolean | string | TranslateResult => sameValue === value || `Должно совпадать с ${field}`

const phone = (value: any): boolean | string | TranslateResult => /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s.]?[(]?[0-9]{1,3}[)]?([-\s.]?[0-9]{3})([-\s.]?[0-9]{3,4})/.test(value) || 'Неправильный формат номера телефона'

export const validationRules = {
  required,
  gtz,
  gt,
  lt,
  gte,
  lte,
  email,
  login,
  sameAs,
  lengthGt,
  lengthLt,
  lengthGte,
  lengthLte,
  phone
}
