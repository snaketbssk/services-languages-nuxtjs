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
import { CreateCategoryRequest } from '~/models/requests/entities/CreateCategoryRequest'
import { ILanguagesService } from '~/services/ILanguagesService'

@Component({
  name: 'CreateCategoryForm'
})
export default class CreateCategoryForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  loading: boolean = false
  title: string = ''
  async onSubmit (): Promise<void> {
    if (!this.title) {
      return
    }
    this.loading = true
    try {
      const createCategoryRequest = new CreateCategoryRequest(this.title)
      await this.languagesService.createCategory(createCategoryRequest)
      this.redirect()
    } catch (e) {
      console.log(e.message)
    }
    this.loading = false
  }

  redirect (): void {
    this.$router.push('/admin/categories')
  }
}
</script>

<style scoped>

</style>
