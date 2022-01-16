<template>
  <v-simple-table dense>
    <template #default>
      <thead>
        <tr>
          <th class="text-left">
            From
          </th>
          <th class="text-left">
            To
          </th>
          <th class="text-left">
            Guid
          </th>
          <th class="text-left">
            Created
          </th>
          <th class="text-left">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(languagePairTable, i) in languagePairTables"
          :key="i"
        >
          <td>{{ getTitleLanguage(languagePairTable.from) }}</td>
          <td>{{ getTitleLanguage(languagePairTable.to) }}</td>
          <td>{{ languagePairTable.guid }}</td>
          <td>{{ languagePairTable.createdAt }}</td>
          <td>
            <v-btn
              icon
              @click="changePage(languagePairTable.guid)"
            >
              <v-icon dark>
                mdi-pencil
              </v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import { Guid } from 'guid-typescript'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { ILanguagesService } from '~/services/ILanguagesService'
import { ILanguagePairTable } from '~/models/Tables/ILanguagePairTable'
import { ILanguageTable } from '~/models/Tables/ILanguageTable'

@Component({
  name: 'LanguagePairsForm'
})
export default class LanguagePairsForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  languageTables: ILanguageTable[] | null = null
  languagePairTables: ILanguagePairTable[] | null = null

  getTitleLanguage (guid: string): string {
    if (!this.languageTables) {
      return guid
    }
    console.log(this.languageTables)
    const languageTable = this.languageTables.find(v => v.guid.toString() === guid)
    if (!languageTable) {
      return guid
    }
    return languageTable.title
  }

  async fetch (): Promise<void> {
    this.languageTables = await this.languagesService.getLanguages()
    this.languagePairTables = await this.languagesService.getLanguagePairs()
  }

  changePage (guid: Guid): void {
    this.$router.push({ path: `/admin/language-pair/${guid.toString()}` })
  }
}
</script>

<style scoped>

</style>
