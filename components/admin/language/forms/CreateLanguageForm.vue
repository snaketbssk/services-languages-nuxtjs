<template>
  <v-form
    ref="form"
    lazy-validation
    @submit.prevent="onSubmit"
  >
    <div class="text-body-2">
      Title
    </div>
    <v-text-field
      v-model="title"
      dense
      flat
      solo
    />
    <v-btn
      :loading="loading"
      class="ma-1"
      block
      color="primary"
      type="submit"
    >
      Create
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { CreateLanguageRequest } from '~/models/requests/entities/CreateLanguageRequest'
import { ILanguagesService } from '~/services/ILanguagesService'

@Component({
  name: 'CreateLanguageForm'
})
export default class CreateLanguageForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  loading: boolean = false
  title: string = ''
  async onSubmit (): Promise<void> {
    if (!this.title) {
      return
    }
    this.loading = true
    try {
      const createLanguageRequest = new CreateLanguageRequest(this.title)
      await this.languagesService.createLanguage(createLanguageRequest)
      this.redirect()
    } catch (e) {
      console.log(e.message)
    }
    this.loading = false
  }

  redirect (): void {
    this.$router.push('/admin/languages')
  }
}
</script>

<style scoped>

</style>
