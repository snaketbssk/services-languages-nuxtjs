<template>
  <div />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'IndexWordAdminPage',
  components: { },
  middleware: [Middlewares.CHECK_ADMIN]
})
export default class IndexWordAdminPage extends Vue {

}
</script>

<style scoped>

</style>
