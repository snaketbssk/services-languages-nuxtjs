<template>
  <EditWordForm />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Middlewares } from '~/constants/middlewares'
import EditWordForm from '~/components/admin/word/forms/EditWordForm.vue'

@Component({
  name: 'EditWordAdminPage',
  components: { EditWordForm },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class EditWordAdminPage extends Vue {

}
</script>

<style scoped>

</style>
