<template>
  <v-footer
    app
  >
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'Footer'
})
export default class Footer extends Vue {
}
</script>

<style scoped>

</style>
