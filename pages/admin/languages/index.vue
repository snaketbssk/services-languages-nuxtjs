<template>
  <LanguagesForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LanguagesForm from '~/components/admin/languages/forms/LanguagesFrom.vue'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'IndexLanguagesAdminPage',
  components: { LanguagesForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class IndexLanguagesAdminPage extends Vue {

}
</script>

<style scoped>

</style>
