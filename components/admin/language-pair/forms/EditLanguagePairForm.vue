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
      :loading="loading"
      class="ma-1"
      block
      color="primary"
      type="submit"
    >
      Edit
    </v-btn>
    <v-btn
      :loading="loading"
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

@Component({
  name: 'EditLanguagePairForm'
})
export default class EditLanguagePairForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  loading: boolean = false
  guid: string = ''
  createdAt: string = ''

  fromSelect = { title: '', guid: '' }
  toSelect = { title: '', guid: '' }
  fromItems = [{ title: '', guid: '' }]
  toItems = [{ title: '', guid: '' }]

  async fetch (): Promise<void> {
    this.loading = true
    const languageTables = await this.languagesService.getLanguages()
    const guid = Guid.parse(this.$route.params.guid)
    const languagePairTable = await this.languagesService.getLanguagePair(guid)
    this.guid = languagePairTable.guid.toString()
    this.createdAt = `${languagePairTable.createdAt}`
    this.fromItems = []
    this.toItems = []
    for (let i = 0; i < languageTables.length; i++) {
      const languageTable = languageTables[i]
      this.fromItems.push({ title: languageTable.title, guid: languageTable.guid.toString() })
      this.toItems.push({ title: languageTable.title, guid: languageTable.guid.toString() })
      if (languagePairTable.from.toString() === languageTable.guid.toString()) {
        this.fromSelect = { title: languageTable.title, guid: languageTable.guid.toString() }
      }
      if (languagePairTable.to.toString() === languageTable.guid.toString()) {
        this.toSelect = { title: languageTable.title, guid: languageTable.guid.toString() }
      }
    }
    this.loading = false
  }

  async onSubmit (): Promise<void> {
    if (!this.fromSelect ||
      !this.toSelect ||
      this.fromSelect.guid === this.toSelect.guid) {
      return
    }
    this.loading = true
    try {
      const guid = Guid.parse(this.guid)
      const createLanguagePairRequest = new CreateLanguagePairRequest(this.fromSelect.guid, this.toSelect.guid)
      await this.languagesService.editLanguagePair(guid, createLanguagePairRequest)
      this.redirect()
    } catch (e) {
      console.log(e.message)
    }
    this.loading = false
  }

  async onDelete (): Promise<void> {
    this.loading = true
    try {
      const guid = Guid.parse(this.guid)
      await this.languagesService.deleteLanguagePair(guid)
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
