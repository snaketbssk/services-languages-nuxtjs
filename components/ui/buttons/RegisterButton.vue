<template>
  <v-btn
    color="secondary"
    class="mx-2"
    to="authorization/register"
  >
    Register
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'RegisterButton'
})
export default class RegisterButton extends Vue {
}
</script>

<style scoped>

</style>
