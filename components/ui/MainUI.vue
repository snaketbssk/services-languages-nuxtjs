<template>
  <v-main>
    <v-container>
      <Nuxt />
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'MainUI'
})
export default class MainUI extends Vue {
}
</script>

<style scoped>

</style>
