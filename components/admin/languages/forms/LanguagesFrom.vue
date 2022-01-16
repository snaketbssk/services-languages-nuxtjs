<template>
  <v-simple-table dense>
    <template #default>
      <thead>
        <tr>
          <th class="text-left">
            Title
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
          v-for="(languageTable, i) in languageTables"
          :key="i"
        >
          <td>{{ languageTable.title }}</td>
          <td>{{ languageTable.guid }}</td>
          <td>{{ languageTable.createdAt }}</td>
          <td>
            <v-btn
              icon
              @click="changePage(languageTable.guid)"
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
import { ILanguageTable } from '~/models/Tables/ILanguageTable'

@Component({
  name: 'LanguagesForm'
})
export default class LanguagesForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  languageTables: ILanguageTable[] | null = null

  async fetch (): Promise<void> {
    this.languageTables = await this.languagesService.getLanguages()
  }

  changePage (guid: Guid): void {
    this.$router.push({ path: `/admin/language/${guid.toString()}` })
  }
}
</script>

<style scoped>

</style>
