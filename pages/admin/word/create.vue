<template>
  <div />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'CreateWordAdminPage',
  components: { },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class CreateWordAdminPage extends Vue {
}
</script>

<style scoped>

</style>
