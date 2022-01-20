<template>
  <CreateWordForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Middlewares } from '~/constants/middlewares'
import CreateWordForm from '~/components/admin/word/forms/CreateWordForm.vue'

@Component({
  name: 'CreateWordAdminPage',
  components: { CreateWordForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class CreateWordAdminPage extends Vue {
}
</script>

<style scoped>

</style>
