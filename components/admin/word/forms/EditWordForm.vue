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

    <div
      class="
      text-body-2"
    >
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
      v-model="categoriesMultipleSelect.select"
      :items="categoriesMultipleSelect.items"
      :disabled="isLoading"
      item-text="text"
      item-value="value"
      label=""
      chips
      multiple
    />

    <div class="text-body-2">
      Categories
    </div>
    <v-select
      v-model="languagesPairSelect.select"
      :items="languagesPairSelect.items"
      :disabled="isLoading"
      item-text="text"
      item-value="value"
      label="From"
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
      Edit
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Guid } from 'guid-typescript'
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { EditWordRequest } from '~/models/requests/entities/EditWordRequest'
import { ILanguagesService } from '~/services/ILanguagesService'
import { IMultipleSelect } from '~/models/selects/IMultipleSelect'
import { MultipleSelect } from '~/models/selects/entities/MultipleSelect'
import { ISingleSelect } from '~/models/selects/ISingleSelect'
import { SingleSelect } from '~/models/selects/entities/SingleSelect'
import { ItemSelect } from '~/models/selects/entities/ItemSelect'

@Component({
  name: 'EditWordForm'
})
export default class EditWordForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  guid: string = ''
  isLoading: boolean = true
  sentence: string = ''
  from: string = ''
  to: string = ''
  transcription: string = ''

  createdAt: string = ''

  // fromLanguageSelect: ISingleSelect = new SingleSelect()
  // toLanguageSelect: ISingleSelect = new SingleSelect()

  categoriesMultipleSelect: IMultipleSelect = new MultipleSelect()
  languagesPairSelect: ISingleSelect = new SingleSelect()

  // async load (): Promise<void> {
  //   const languageTables = await this.languagesService.getLanguages()
  //   const guid = Guid.parse('d3aabf53-6172-4d3f-b89a-5a54084bd8c5')
  //   const languagePairTable = await this.languagesService.getLanguagePair(guid)
  //   this.guid = languagePairTable.guid.toString()
  //   this.createdAt = `${languagePairTable.createdAt}`
  //   this.fromLanguageSelect.clear()
  //   this.toLanguageSelect.clear()
  //   for (let i = 0; i < languageTables.length; i++) {
  //     const languageTable = languageTables[i]
  //     const item = new ItemSelect(languageTable.title, languageTable.guid.toString())
  //     this.fromLanguageSelect.items.push(item)
  //     this.toLanguageSelect.items.push(item)
  //     if (languagePairTable.from.toString() === languageTable.guid.toString()) {
  //       this.fromLanguageSelect.select = item
  //     }
  //     if (languagePairTable.to.toString() === languageTable.guid.toString()) {
  //       this.toLanguageSelect.select = item
  //     }
  //   }
  // }

  async loadCategories (): Promise<void> {
    const categoriesTables = await this.languagesService.getCategories()
    if (categoriesTables.length === 0) {
      return
    }
    this.categoriesMultipleSelect.clear()
    for (let i = 0; i < categoriesTables.length; i++) {
      const categoriesTable = categoriesTables[i]
      const item = new ItemSelect(categoriesTable.title, categoriesTable.guid.toString())
      this.categoriesMultipleSelect.items.push(item)
    }
    // this.categoriesMultipleSelect.select = [this.categoriesMultipleSelect.items[0].value]
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

  async loadWord (): Promise<void> {
    const guid = Guid.parse(this.$route.params.guid)
    const wordTable = await this.languagesService.getWord(guid)
    this.guid = wordTable.guid.toString()
    this.from = wordTable.from
    this.to = wordTable.to
    this.transcription = wordTable.transcription
    this.sentence = wordTable.sentence
    const guidLanguagesPair = wordTable.languagesPair.guid.toString()
    const item = this.languagesPairSelect.items.find(v => v.value === guidLanguagesPair)
    if (item) {
      this.languagesPairSelect.select = item
    }
    this.categoriesMultipleSelect.select = []
    for (let i = 0; i < wordTable.categories.length; i++) {
      const item = this.categoriesMultipleSelect.items.find(v => v.value === wordTable.categories[i].guid.toString())
      if (item) {
        this.categoriesMultipleSelect.select.push(item.value)
      }
    }
  }

  async fetch (): Promise<void> {
    // await this.load()
    await this.loadCategories()
    await this.loadLanguagePairs()
    await this.loadWord()

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
      const guid = Guid.parse(this.guid)
      const editWordRequest = new EditWordRequest(
        this.sentence,
        this.languagesPairSelect.select.value,
        this.categoriesMultipleSelect.select,
        this.from,
        this.to,
        this.transcription)
      await this.languagesService.editWord(guid, editWordRequest)
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
