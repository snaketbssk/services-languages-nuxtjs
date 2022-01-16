<template>
  <v-btn
    @click="onClick"
  >
    {{ login }}
  </v-btn>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator'
import { authStore } from '~/store'
import { ISignUpRequest } from '~/models/requests/ISignUpRequest'

@Component({
  name: 'ProfileButton'
})
export default class ProfileButton extends Vue {
  get login (): string {
    if (authStore.userTable) {
      return authStore.userTable.login
    }
    return ''
  }

  onClick (): void {
  }
}
</script>

<style scoped>

</style>
