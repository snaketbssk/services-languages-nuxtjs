<template>
  <div />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'EditWordAdminPage',
  components: { },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class EditWordAdminPage extends Vue {

}
</script>

<style scoped>

</style>
