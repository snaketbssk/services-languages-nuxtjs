<template>
  <v-btn
    @click="onClick"
  >
    Logout
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { authStore } from '~/store'

@Component({
  name: 'LogoutButton'
})
export default class LogoutButton extends Vue {
  onClick (): void {
    authStore.logout()
    this.$router.push('/')
  }
}
</script>

<style scoped>

</style>
