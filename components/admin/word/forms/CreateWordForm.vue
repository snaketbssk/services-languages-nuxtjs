<template>
  <v-form
    ref="form"
    lazy-validation
    @submit.prevent="onSubmit"
  >
    <div class="text-body-2">
      From
    </div>
    <v-text-field
      v-model="from"
      :disabled="isLoading"
      dense
      flat
      solo
    />

    <div class="text-body-2">
      To
    </div>
    <v-text-field
      v-model="to"
      :disabled="isLoading"
      dense
      flat
      solo
    />

    <div class="text-body-2">
      Transcription
    </div>
    <v-text-field
      v-model="transcription"
      :disabled="isLoading"
      dense
      flat
      solo
    />

    <div class="text-body-2">
      Sentence
    </div>
    <v-text-field
      v-model="sentence"
      :disabled="isLoading"
      dense
      flat
      solo
    />

    <div class="text-body-2">
      Categories
    </div>
    <v-select
      v-model="categoryMultipleSelect.select"
      :items="categoryMultipleSelect.items"
      :disabled="isLoading"
      item-text="text"
      item-value="value"
      label=""
      persistent-hint
      return-object
      single-line
    />

    <div class="text-body-2">
      Languages Pair
    </div>
    <v-select
      v-model="languagesPairSelect.select"
      :items="languagesPairSelect.items"
      :disabled="isLoading"
      item-text="text"
      item-value="value"
      label=""
      persistent-hint
      return-object
      single-line
    />

    <v-btn
      :loading="isLoading"
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
import { CreateWordRequest } from '~/models/requests/entities/CreateWordRequest'
import { ILanguagesService } from '~/services/ILanguagesService'
import { ItemSelect } from '~/models/selects/entities/ItemSelect'
import { ISingleSelect } from '~/models/selects/ISingleSelect'
import { SingleSelect } from '~/models/selects/entities/SingleSelect'

@Component({
  name: 'CreateWordForm'
})
export default class CreateWordForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  isLoading: boolean = true
  sentence: string = ''
  from: string = ''
  to: string = ''
  transcription: string = ''

  languagesPairSelect: ISingleSelect = new SingleSelect()
  categoryMultipleSelect: ISingleSelect = new SingleSelect()

  async loadCategories (): Promise<void> {
    const categoriesTables = await this.languagesService.getCategories()
    if (categoriesTables.length === 0) {
      return
    }
    this.categoryMultipleSelect.clear()
    for (let i = 0; i < categoriesTables.length; i++) {
      const categoriesTable = categoriesTables[i]
      const item = new ItemSelect(categoriesTable.title, categoriesTable.guid.toString())
      this.categoryMultipleSelect.items.push(item)
    }
  }

  async loadLanguagePairs (): Promise<void> {
    const languagePairTables = await this.languagesService.getLanguagePairs()
    const languageTables = await this.languagesService.getLanguages()
    if (languagePairTables.length === 0 || languageTables.length === 0) {
      return
    }
    this.languagesPairSelect.clear()
    for (let i = 0; i < languagePairTables.length; i++) {
      const from = languageTables.find(v => v.guid === languagePairTables[i].from)
      const to = languageTables.find(v => v.guid === languagePairTables[i].to)
      if (from && to) {
        const item = new ItemSelect(`From: ${from.title} To: ${to.title}`, languagePairTables[i].guid.toString())
        this.languagesPairSelect.items.push(item)
      }
    }
  }

  async fetch (): Promise<void> {
    await this.loadCategories()
    await this.loadLanguagePairs()

    setTimeout(() => {
      this.isLoading = false
    },
    100)
  }

  // isValidation (): boolean {
  //   if (!this.sentence || !this.guidLanguagesPair || !this.from || !this.to || !this.transcription) {
  //     return false
  //   }
  //   return true
  // }

  async onSubmit (): Promise<void> {
    // if (!this.isValidation()) {
    //   return
    // }
    this.isLoading = true
    try {
      const createWordRequest = new CreateWordRequest(
        this.sentence,
        this.languagesPairSelect.select.value,
        this.categoryMultipleSelect.select.value,
        this.from,
        this.to,
        this.transcription)
      await this.languagesService.createWord(createWordRequest)
      this.redirect()
    } catch (e) {
      console.log(e.message)
    }
    this.isLoading = false
  }

  redirect (): void {
    this.$router.push('/admin/words')
  }
}
</script>

<style scoped>

</style>
