<template>
  <CategoriesForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CategoriesForm from '~/components/admin/categories/forms/CategoriesForm.vue'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'IndexCategoriesAdminPage',
  components: { CategoriesForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class IndexLanguagePairsAdminPage extends Vue {

}
</script>

<style scoped>

</style>
