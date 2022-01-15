import { Vue } from 'nuxt-property-decorator'

export type VForm = Vue & {
  validate(): boolean;
  resetValidation(): boolean;
  reset(): void;
};
