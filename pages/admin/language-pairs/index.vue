<template>
  <LanguagePairsForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Middlewares } from '~/constants/middlewares'
import LanguagePairsForm from '~/components/admin/language-pairs/forms/LanguagePairsForm.vue'

@Component({
  name: 'IndexLanguagePairsAdminPage',
  components: { LanguagePairsForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class IndexLanguagePairsAdminPage extends Vue {

}
</script>

<style scoped>

</style>
