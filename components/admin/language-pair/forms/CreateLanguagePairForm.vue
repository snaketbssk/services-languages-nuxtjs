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
import { CreateLanguagePairRequest } from '~/models/requests/entities/CreateLanguagePairRequest'
import { ILanguagesService } from '~/services/ILanguagesService'
import { ISingleSelect } from '~/models/selects/ISingleSelect'
import { SingleSelect } from '~/models/selects/entities/SingleSelect'
import { ItemSelect } from '~/models/selects/entities/ItemSelect'

@Component({
  name: 'CreateLanguagePairForm'
})
export default class CreateLanguagePairForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  isLoading: boolean = true

  fromLanguageSelect: ISingleSelect = new SingleSelect()
  toLanguageSelect: ISingleSelect = new SingleSelect()

  async load (): Promise<void> {
    try {
      const languageTables = await this.languagesService.getLanguages()
      if (languageTables.length === 0) {
        return
      }
      this.fromLanguageSelect.clear()
      this.toLanguageSelect.clear()
      for (let i = 0; i < languageTables.length; i++) {
        const languageTable = languageTables[i]
        const item = new ItemSelect(languageTable.title, languageTable.guid.toString())
        this.fromLanguageSelect.items.push(item)
        this.toLanguageSelect.items.push(item)
      }
    } catch (e) {
      console.log(e.message)
    }
  }

  async fetch (): Promise<void> {
    await this.load()

    setTimeout(() => {
      this.isLoading = false
    },
    100)
  }

  async onSubmit (): Promise<void> {
    // if (!this.fromSelect ||
    //     !this.toSelect ||
    //     this.fromSelect.guid === this.toSelect.guid) {
    //   return
    // }
    this.isLoading = true
    try {
      const createLanguagePairRequest = new CreateLanguagePairRequest(this.fromLanguageSelect.select.value, this.toLanguageSelect.select.value)
      await this.languagesService.createLanguagePair(createLanguagePairRequest)
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
