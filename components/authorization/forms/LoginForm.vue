<template>
  <v-form
    ref="form"
    lazy-validation
    @submit.prevent="onSubmit"
  >
    <div class="text-body-2">
      Login
    </div>
    <v-text-field
      v-model="signInRequest.loginOrEmail"
      :rules="rules.login"
      dense
      flat
      solo
    />
    <div class="text-body-2">
      Password
    </div>
    <PasswordTextField
      v-model="signInRequest.password"
      :rules="rules.password"
      dense
      flat
      solo
      type="password"
    />
    <v-btn
      :loading="loading"
      class="ma-1"
      block
      color="primary"
      type="submit"
    >
      Login
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Component, Emit, Inject, Ref, Vue } from 'nuxt-property-decorator'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { IIdentityService } from '~/services/IIdentityService'
import PasswordTextField from '~/components/ui/textfields/PasswordField.vue'
import { SignInRequest } from '~/models/requests/entities/SignInRequest'
import { TokenTable } from '~/models/Tables/entities/TokenTable'
import { Rules } from '~/models/Rules'
import { validationRules } from '~/utils/validations'
import { VForm } from '~/models/VForm'

@Component({
  name: 'LoginFormAuthorization',
  components: { PasswordTextField }
})
export default class LoginFormAuthorization extends Vue {
  @Inject(ServiceEnum.Identity)
  readonly identityService!: IIdentityService

  @Ref('form')
  readonly formRef!: VForm

  signInRequest = new SignInRequest()
  loading: boolean = false
  fetch (): void {
    this.signInRequest.loginOrEmail = 'admin'
    this.signInRequest.password = 'admin'
  }

  get rules (): Rules {
    return {
      login: [
        validationRules.required
      ],
      password: [
        validationRules.required
      ]
    }
  }

  async onSubmit (): Promise<void> {
    if (!this.formRef.validate()) {
      return
    }
    try {
      this.loading = true
      const tokenTable = await this.identityService.signIn(this.signInRequest)
      this.loading = false
      this.success(tokenTable)
    } catch (e) {
      this.loading = false
    }
  }

  @Emit()
  success (tokenTable: TokenTable): TokenTable {
    return tokenTable
  }
}
</script>

<style scoped>

</style>
