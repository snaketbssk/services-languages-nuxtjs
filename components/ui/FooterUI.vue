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
  name: 'FooterUI'
})
export default class FooterUI extends Vue {
}
</script>

<style scoped>

</style>
