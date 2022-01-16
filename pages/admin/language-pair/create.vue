<template>
  <CreateLanguagePairForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CreateLanguagePairForm from '~/components/admin/language-pair/forms/CreateLanguagePairForm.vue'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'CreateLanguagePairAdminPage',
  components: { CreateLanguagePairForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class CreateLanguagePairAdminPage extends Vue {
}
</script>

<style scoped>

</style>
