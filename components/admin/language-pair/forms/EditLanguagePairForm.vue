<template>
  <v-form
    ref="form"
    lazy-validation
    @submit.prevent="onSubmit"
  >
    <div class="text-body-2">
      From
    </div>
    <v-select
      v-model="fromLanguageSelect.select"
      :items="fromLanguageSelect.items"
      :disabled="isLoading"
      item-text="text"
      item-value="value"
      label=""
      persistent-hint
      return-object
      single-line
    />
    <div class="text-body-2">
      To
    </div>
    <v-select
      v-model="toLanguageSelect.select"
      :items="toLanguageSelect.items"
      :disabled="isLoading"
      item-text="text"
      item-value="value"
      label=""
      persistent-hint
      return-object
      single-line
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
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { CreateLanguagePairRequest } from '~/models/requests/entities/CreateLanguagePairRequest'
import { ILanguagesService } from '~/services/ILanguagesService'
import { ISingleSelect } from '~/models/selects/ISingleSelect'
import { SingleSelect } from '~/models/selects/entities/SingleSelect'
import { ItemSelect } from '~/models/selects/entities/ItemSelect'

@Component({
  name: 'EditLanguagePairForm'
})
export default class EditLanguagePairForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  isLoading: boolean = true
  guid: string = ''
  createdAt: string = ''

  fromLanguageSelect: ISingleSelect = new SingleSelect()
  toLanguageSelect: ISingleSelect = new SingleSelect()

  async load (): Promise<void> {
    const languageTables = await this.languagesService.getLanguages()
    const guid = Guid.parse(this.$route.params.guid)
    const languagePairTable = await this.languagesService.getLanguagePair(guid)
    this.guid = languagePairTable.guid.toString()
    this.createdAt = `${languagePairTable.createdAt}`
    this.fromLanguageSelect.clear()
    this.toLanguageSelect.clear()
    for (let i = 0; i < languageTables.length; i++) {
      const languageTable = languageTables[i]
      const item = new ItemSelect(languageTable.title, languageTable.guid.toString())
      this.fromLanguageSelect.items.push(item)
      this.toLanguageSelect.items.push(item)
      if (languagePairTable.from.toString() === languageTable.guid.toString()) {
        this.fromLanguageSelect.select = item
      }
      if (languagePairTable.to.toString() === languageTable.guid.toString()) {
        this.toLanguageSelect.select = item
      }
    }
  }

  async fetch (): Promise<void> {
    await this.load()
    this.isLoading = false
  }

  async onSubmit (): Promise<void> {
    // if (!this.fromSelect ||
    //   !this.toSelect ||
    //   this.fromSelect.guid === this.toSelect.guid) {
    //   return
    // }
    this.isLoading = true
    try {
      const guid = Guid.parse(this.guid)
      const createLanguagePairRequest = new CreateLanguagePairRequest(this.fromLanguageSelect.select.value, this.toLanguageSelect.select.value)
      await this.languagesService.editLanguagePair(guid, createLanguagePairRequest)
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
      await this.languagesService.deleteLanguagePair(guid)
      this.redirect()
    } catch (e) {
      console.log(e.message)
    }
    this.isLoading = false
  }

  redirect (): void {
    this.$router.push('/admin/language-pairs')
  }
}
</script>

<style scoped>

</style>
