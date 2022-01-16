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
          v-for="(wordTable, i) in wordTables"
          :key="i"
        >
          <td>{{ wordTable.from }}</td>
          <td>{{ wordTable.to }}</td>
          <td>{{ wordTable.guid }}</td>
          <td>{{ wordTable.createdAt }}</td>
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
import { IWordTable } from '~/models/Tables/IWordTable'

@Component({
  name: 'WordsForm'
})
export default class WordsForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  wordTables: IWordTable[] | null = null

  async fetch (): Promise<void> {
    this.wordTables = await this.languagesService.getWords()
  }

  changePage (guid: Guid): void {
    this.$router.push({ path: `/admin/word/${guid.toString()}` })
  }
}
</script>

<style scoped>

</style>
