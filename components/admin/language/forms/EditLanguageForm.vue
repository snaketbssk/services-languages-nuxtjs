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
    <div class="text-body-2">
      Guid
    </div>
    <v-text-field
      v-model="guid"
      dense
      flat
      solo
      type="d"
      disabled
    />
    <div class="text-body-2">
      Created At
    </div>
    <v-text-field
      v-model="createdAt"
      dense
      flat
      solo
      disabled
    />

    <v-btn
      :loading="isLoading"
      class="ma-1"
      block
      color="primary"
      type="submit"
    >
      Edit
    </v-btn>
    <v-btn
      :loading="isLoading"
      class="ma-1"
      block
      color="error"
      @click="onDelete"
    >
      Delete
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import { Guid } from 'guid-typescript'
import { EditLanguageRequest } from '~/models/requests/entities/EditLanguageRequest'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { ILanguagesService } from '~/services/ILanguagesService'

@Component({
  name: 'EditLanguageForm'
})
export default class EditLanguageForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  isLoading: boolean = true
  title: string = ''
  guid: string = ''
  createdAt: string = ''

  async load (): Promise<void> {
    const guid = Guid.parse(this.$route.params.guid)
    const languageTable = await this.languagesService.getLanguage(guid)
    this.title = languageTable.title
    this.guid = languageTable.guid.toString()
    this.createdAt = `${languageTable.createdAt}`
  }

  async fetch (): Promise<void> {
    await this.load()
    this.isLoading = false
  }

  async onSubmit (): Promise<void> {
    this.isLoading = true
    try {
      const guid = Guid.parse(this.guid)
      const editLanguageRequest = new EditLanguageRequest(this.title)
      await this.languagesService.editLanguage(guid, editLanguageRequest)
      this.redirect()
    } catch (e) {
      console.log(e.message)
    }
    this.isLoading = false
  }

  async onDelete (): Promise<void> {
    this.isLoading = true
    try {
      const guid = Guid.parse(this.guid)
      await this.languagesService.deleteLanguage(guid)
      this.redirect()
    } catch (e) {
      console.log(e.message)
    }
    this.isLoading = false
  }

  redirect (): void {
    this.$router.push('/admin/languages')
  }
}
</script>

<style scoped>

</style>
