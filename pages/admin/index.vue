<template>
  <div>
    123
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'IndexAdminPage',
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class IndexAdminPage extends Vue {
}
</script>

<style scoped>

</style>
