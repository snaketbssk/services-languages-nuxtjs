<template>
  <v-text-field
    v-bind="$attrs"
    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
    :type="show ? 'text' : 'password'"
    v-on="$listeners"
    @click:append="show = !show"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'PasswordField',
  inheritAttrs: false
})
export default class PasswordField extends Vue {
  show = false
}
</script>

<style scoped>

</style>
