<template>
  <EditCategoryForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import EditCategoryForm from '~/components/admin/category/forms/EditCategoryForm.vue'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'EditCategoryAdminPage',
  components: { EditCategoryForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class EditCategoryAdminPage extends Vue {

}
</script>

<style scoped>

</style>
