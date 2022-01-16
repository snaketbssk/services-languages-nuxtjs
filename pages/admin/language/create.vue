<template>
  <CreateLanguageForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CreateLanguageForm from '~/components/admin/language/forms/CreateLanguageForm.vue'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'CreateLanguageAdminPage',
  components: { CreateLanguageForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class CreateLanguageAdminPage extends Vue {
}
</script>

<style scoped>

</style>
