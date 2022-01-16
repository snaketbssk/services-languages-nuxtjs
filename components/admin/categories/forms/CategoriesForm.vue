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
          v-for="(categoryTableTable, i) in categoryTableTables"
          :key="i"
        >
          <td>{{ categoryTableTable.title }}</td>
          <td>{{ categoryTableTable.guid }}</td>
          <td>{{ categoryTableTable.createdAt }}</td>
          <td>
            <v-btn
              icon
              @click="changePage(categoryTableTable.guid)"
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
import { ICategoryTable } from '~/models/Tables/ICategoryTable'

@Component({
  name: 'CategoriesForm'
})
export default class CategoriesForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  categoryTableTables: ICategoryTable[] | null = null

  async fetch (): Promise<void> {
    this.categoryTableTables = await this.languagesService.getCategories()
  }

  changePage (guid: Guid): void {
    this.$router.push({ path: `/admin/category/${guid.toString()}` })
  }
}
</script>

<style scoped>

</style>
