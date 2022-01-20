<template>
  <v-form
    ref="form"
    lazy-validation
    @submit.prevent="onSubmit"
  >
    <div class="text-body-2">
      Title
    </div>
    <v-text-field
      v-model="title"
      dense
      flat
      solo
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
      :loading="isLoading"
      class="ma-1"
      block
      color="primary"
      type="submit"
    >
      Edit
    </v-btn>
    <v-btn
      :loading="isLoading"
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
import { ILanguagesService } from '~/services/ILanguagesService'
import { EditCategoryRequest } from '~/models/requests/entities/EditCategoryRequest'

@Component({
  name: 'EditCategoryForm'
})
export default class EditCategoryForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  isLoading: boolean = false
  title: string = ''
  guid: string = ''
  createdAt: string = ''

  async fetch (): Promise<void> {
    this.isLoading = true
    const guid = Guid.parse(this.$route.params.guid)
    const languageTable = await this.languagesService.getCategory(guid)
    this.title = languageTable.title
    this.guid = languageTable.guid.toString()
    this.createdAt = `${languageTable.createdAt}`
    this.isLoading = false
  }

  async onSubmit (): Promise<void> {
    this.isLoading = true
    try {
      const guid = Guid.parse(this.guid)
      const editCategoryRequest = new EditCategoryRequest(this.title)
      await this.languagesService.editCategory(guid, editCategoryRequest)
      this.redirect()
    } catch (e) {
      console.log(e.message)
    }
    this.isLoading = false
  }

  async onDelete (): Promise<void> {
    this.isLoading = true
    try {
      const guid = Guid.parse(this.guid)
      await this.languagesService.deleteCategory(guid)
      this.redirect()
    } catch (e) {
      console.log(e.message)
    }
    this.isLoading = false
  }

  redirect (): void {
    this.$router.push('/admin/categories')
  }
}
</script>

<style scoped>

</style>
