<template>
  <div>
    <RegisterFormAuthorization
      @success="onSuccessRegister"
    />
  </div>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import RegisterFormAuthorization from '~/components/authorization/forms/RegisterForm.vue'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { IIdentityService } from '~/services/IIdentityService'
import { SignInRequest } from '~/models/requests/entities/SignInRequest'
import { ISignUpRequest } from '~/models/requests/ISignUpRequest'
import { authStore } from '~/utils/store-accessor'
import { Middlewares } from '~/constants/middlewares'

@Component({
  name: 'RegisterAuthorizationPage',
  components: { RegisterFormAuthorization },
  middleware: [Middlewares.CHECK_GUEST]
})
export default class RegisterAuthorizationPage extends Vue {
  @Inject(ServiceEnum.Identity)
  readonly identityService!: IIdentityService

  async onSuccessRegister (signUpRequest: ISignUpRequest): Promise<void> {
    try {
      const signInRequest = new SignInRequest()
      signInRequest.loginOrEmail = signUpRequest.email
      signInRequest.password = signUpRequest.password
      const tokenTable = await this.identityService.signIn(signInRequest)
      authStore.setToken(tokenTable.token)
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
