<template>
  <CreateCategoryForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CreateCategoryForm from '~/components/admin/category/forms/CreateCategoryForm.vue'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'CreateCategoryAdminPage',
  components: { CreateCategoryForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class CreateCategoryAdminPage extends Vue {
}
</script>

<style scoped>

</style>
