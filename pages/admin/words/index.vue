<template>
  <WordsForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import WordsForm from '~/components/admin/words/forms/WordsForm.vue'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'IndexWordAdminPage',
  components: { WordsForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class IndexWordAdminPage extends Vue {

}
</script>

<style scoped>

</style>
