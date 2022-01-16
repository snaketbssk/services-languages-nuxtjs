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
      v-model="fromSelect"
      :items="fromItems"
      item-text="title"
      item-value="guid"
      label="From"
      persistent-hint
      return-object
      single-line
    />
    <div class="text-body-2">
      To
    </div>
    <v-select
      v-model="toSelect"
      :items="toItems"
      item-text="title"
      item-value="guid"
      label="To"
      persistent-hint
      return-object
      single-line
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
import { CreateLanguagePairRequest } from '~/models/requests/entities/CreateLanguagePairRequest'
import { ILanguagesService } from '~/services/ILanguagesService'

@Component({
  name: 'CreateLanguagePairForm'
})
export default class CreateLanguagePairForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  loading: boolean = false

  fromSelect = { title: '', guid: '' }
  toSelect = { title: '', guid: '' }
  fromItems = [{ title: '', guid: '' }]
  toItems = [{ title: '', guid: '' }]

  async fetch (): Promise<void> {
    const languageTables = await this.languagesService.getLanguages()
    this.fromItems = []
    this.toItems = []
    for (let i = 0; i < languageTables.length; i++) {
      const languageTable = languageTables[i]
      this.fromItems.push({ title: languageTable.title, guid: languageTable.guid.toString() })
      this.toItems.push({ title: languageTable.title, guid: languageTable.guid.toString() })
    }
    this.fromSelect = { title: languageTables[0].title, guid: languageTables[0].guid.toString() }
    this.toSelect = { title: languageTables[0].title, guid: languageTables[0].guid.toString() }
  }

  async onSubmit (): Promise<void> {
    if (!this.fromSelect ||
        !this.toSelect ||
        this.fromSelect.guid === this.toSelect.guid) {
      return
    }
    this.loading = true
    try {
      const createLanguagePairRequest = new CreateLanguagePairRequest(this.fromSelect.guid, this.toSelect.guid)
      await this.languagesService.createLanguagePair(createLanguagePairRequest)
      this.redirect()
    } catch (e) {
      console.log(e.message)
    }
    this.loading = false
  }

  redirect (): void {
    this.$router.push('/admin/language-pairs')
  }
}
</script>

<style scoped>

</style>
