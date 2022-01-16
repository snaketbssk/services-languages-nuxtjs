<template>
  <v-form
    ref="form"
    lazy-validation
    @submit.prevent="onSubmit"
  >
    <div class="text-body-2">
      Email
    </div>
    <v-text-field
      v-model="signUpRequest.email"
      :rules="rules.email"
      dense
      solo
      flat
      type="email"
    />
    <div class="text-body-2">
      Login
    </div>
    <v-text-field
      v-model="signUpRequest.login"
      :rules="rules.login"
      dense
      solo
      flat
    />
    <div class="text-body-2">
      Password
    </div>
    <PasswordTextField
      v-model="signUpRequest.password"
      :rules="rules.password"
      dense
      solo
      flat
      type="password"
    />
    <div class="text-body-2">
      Repeat password
    </div>
    <PasswordTextField
      v-model="signUpRequest.confirmPassword"
      :rules="rules.confirmPassword"
      dense
      solo
      flat
      type="password"
    />
    <v-btn
      block
      color="primary"
      type="submit"
      :loading="loading"
      class="ma-1"
    >
      Register
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Component, Emit, Inject, Ref, Vue } from 'nuxt-property-decorator'
import { SignUpRequest } from '~/models/requests/entities/SignUpRequest'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { IIdentityService } from '~/services/IIdentityService'
import { ISignUpRequest } from '~/models/requests/ISignUpRequest'
import PasswordTextField from '~/components/ui/textfields/PasswordField.vue'
import { Rules } from '~/models/Rules'
import { validationRules } from '~/utils/validations'
import { VForm } from '~/models/VForm'

@Component({
  name: 'RegisterFormAuthorization',
  components: { PasswordTextField }
})
export default class RegisterFormAuthorization extends Vue {
  @Inject(ServiceEnum.Identity)
  readonly identityService!: IIdentityService

  @Ref('form')
  readonly formRef!: VForm

  signUpRequest = new SignUpRequest()
  loading: boolean = false
  get rules (): Rules {
    return {
      login: [
        validationRules.required,
        validationRules.login
      ],
      email: [
        validationRules.required,
        validationRules.email
      ],
      password: [
        validationRules.required,
        validationRules.lengthGte(8)
      ],
      confirmPassword: [
        validationRules.required,
        validationRules.sameAs(this.signUpRequest.password, 'Пароль')
      ]
    }
  }

  async onSubmit (): Promise<void> {
    if (!this.formRef.validate()) {
      return
    }
    try {
      this.loading = true
      await this.identityService.signUp(this.signUpRequest)
      this.success()
      this.loading = false
    } catch (exception) {
      this.loading = false
    }
  }

  @Emit()
  success (): ISignUpRequest {
    return this.signUpRequest
  }
}
</script>

<style scoped>

</style>
