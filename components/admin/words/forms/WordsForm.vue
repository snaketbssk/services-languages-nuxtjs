<template>
  <div>
    <div>
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
                Transcription
              </th>
              <th class="text-left">
                Category
              </th>
              <th class="text-left">
                Sentence
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
              v-for="(wordTable, i) in paginationResponse.values"
              :key="i"
            >
              <td>{{ wordTable.from }}</td>
              <td>{{ wordTable.to }}</td>
              <td>{{ wordTable.transcription }}</td>
              <td>{{ wordTable.category.title }}</td>
              <td>{{ wordTable.sentence }}</td>
              <td>{{ wordTable.guid }}</td>
              <td>{{ wordTable.createdAt }}</td>
              <td>
                <v-btn
                  icon
                  @click="changePage(wordTable.guid)"
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
    </div>
    <div>
      <v-pagination
        :length="totalPages"
        :value="currentPage"
        @input="onPageChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import { Guid } from 'guid-typescript'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { ILanguagesService } from '~/services/ILanguagesService'
import { IWordTable } from '~/models/Tables/IWordTable'
import { PaginationRequest } from '~/models/requests/entities/PaginationRequest'
import { PaginationResponse } from '~/models/responses/entities/PaginationResponse'

@Component({
  name: 'WordsForm'
})
export default class WordsForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  // wordTables: IWordTable[] | null = null

  paginationResponse: PaginationResponse<IWordTable> = new PaginationResponse<IWordTable>(0, [])

  currentPage = 1

  visibleCount = 100

  get totalPages (): number {
    return Math.round(this.paginationResponse.totalCount / this.visibleCount)
  }

  get from (): number {
    return (this.currentPage - 1) * this.visibleCount
  }

  get to (): number {
    return this.from + this.visibleCount - 1
  }

  onPageChange (page: number): void {
    this.currentPage = page
    this.$fetch()
  }

  async loadWords (): Promise<void> {
    try {
      const paginationRequest = new PaginationRequest(this.from, this.to)
      this.paginationResponse = await this.languagesService.getWords(paginationRequest)
      // this.wordTables = response.values
      // this.totalPulls = response.totalCount
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (e) {

    }
  }

  async fetch (): Promise<void> {
    await this.loadWords()
  }

  changePage (guid: Guid): void {
    this.$router.push({ path: `/admin/word/${guid.toString()}` })
  }
}
</script>

<style scoped>

</style>
