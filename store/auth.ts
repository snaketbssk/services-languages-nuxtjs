import { Action, config, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { AUTH_COOKIE_NAME } from '~/constants/config'
import { $cookies } from '~/utils/cookies-accessor'
import { $services } from '~/utils/initServices'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { IUserTable } from '~/models/Tables/IUserTable'
import { RoleUserTableEnum } from '~/models/enums/RoleUserTableEnum'

config.rawError = true

@Module({
  name: 'auth',
  stateFactory: true,
  namespaced: true
})
export default class AuthModule extends VuexModule {
  token: string | null = null
  userTable: IUserTable | null = null

  get isAdmin (): boolean {
    return this.userTable ? this.userTable.role === RoleUserTableEnum.Admin : false
  }

  get isAuthenticated (): boolean {
    return !!this.token
  }

  @Mutation
  setToken (token: string | null): void {
    this.token = token
    if (token) {
      $cookies.set(AUTH_COOKIE_NAME, token)
    } else {
      $cookies.remove(AUTH_COOKIE_NAME)
    }
  }

  @Mutation
  setUser (userTable: IUserTable | null): void {
    this.userTable = userTable
  }

  @Action
  logout (): void {
    this.setToken(null)
    this.setUser(null)
  }

  @Action
  async fetchAuthedUser (): Promise<void> {
    const userTable = await $services[ServiceEnum.Identity].getUser()
    this.setUser(userTable)
  }
}
