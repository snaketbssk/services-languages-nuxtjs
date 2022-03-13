<template>
  <v-btn
    color="primary"
    class="mx-2"
    to="authorization/login"
  >
    Login
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'LoginButton'
})
export default class LoginButton extends Vue {
}
</script>

<style scoped>

</style>
