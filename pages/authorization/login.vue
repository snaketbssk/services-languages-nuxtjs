<template>
  <div>
    <LoginFormAuthorization
      @success="onSuccessRegister"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LoginFormAuthorization from '~/components/authorization/forms/LoginForm.vue'
import { TokenTable } from '~/models/Tables/entities/TokenTable'
import { authStore } from '~/utils/store-accessor'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'LoginAuthorizationPage',
  components: { LoginFormAuthorization },
  middleware: [Middlewares.CHECK_GUEST]
})
export default class LoginAuthorizationPage extends Vue {
  async onSuccessRegister (tokenTable: TokenTable): Promise<void> {
    authStore.setToken(tokenTable.token)
    try {
      await authStore.fetchAuthedUser()
      this.redirect()
    } catch (e) {
      console.log(e.message)
    }
  }

  redirect (): void {
    this.$router.push('/')
  }
}
</script>

<style scoped>

</style>
