<template>
  <EditLanguageForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Middlewares } from '~/constants/middlewares'
import EditLanguageForm from '~/components/admin/language/forms/EditLanguageForm.vue'

@Component({
  name: 'EditLanguageAdminPage',
  components: { EditLanguageForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class EditLanguageAdminPage extends Vue {

}
</script>

<style scoped>

</style>
