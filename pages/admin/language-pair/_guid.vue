<template>
  <EditLanguagePairForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Middlewares } from '~/constants/middlewares'
import EditLanguagePairForm from '~/components/admin/language-pair/forms/EditLanguagePairForm.vue'

@Component({
  name: 'EditLanguagePairAdminPage',
  components: { EditLanguagePairForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class EditLanguagePairAdminPage extends Vue {

}
</script>

<style scoped>

</style>
