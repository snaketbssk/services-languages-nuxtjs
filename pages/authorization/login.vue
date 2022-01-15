<template>
  <div>
    <LoginFormAuthorization
      @success="onSuccessRegister"
    />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import LoginFormAuthorization from '~/components/authorization/LoginForm.vue'
import { TokenTable } from '~/models/Tables/entities/TokenTable'
import { authStore } from '~/utils/store-accessor'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { IIdentityService } from '~/services/IIdentityService'

@Component({
  name: 'LoginAuthorizationPage',
  components: { LoginFormAuthorization }
})
export default class LoginAuthorizationPage extends Vue {
  @Inject(ServiceEnum.Identity)
  readonly identityService!: IIdentityService

  async onSuccessRegister (tokenTable: TokenTable): void {
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
