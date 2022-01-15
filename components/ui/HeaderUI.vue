<template>
  <v-app-bar
    fixed
    app
  >
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <div>
      {{ login }}
    </div>
    <template
      v-if="!isAuthenticated"
    >
      <v-toolbar-items>
        <v-btn
          to="/authorization/login"
        >
          Login
        </v-btn>
        <v-btn
          to="/authorization/register"
        >
          Register
        </v-btn>
      </v-toolbar-items>
    </template>
    <template
      v-else
    >
      <v-toolbar-items>
        <LogoutButton />
      </v-toolbar-items>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { authStore } from '~/utils/store-accessor'
import LogoutButton from '~/components/ui/buttons/LogoutButton.vue'

@Component({
  name: 'HeaderUI',
  components: { LogoutButton }
})
export default class HeaderUI extends Vue {
  title: string = 'Languages'

  get login (): string {
    if (authStore.userTable) {
      return authStore.userTable.login
    }
    return ''
  }

  get isAuthenticated (): boolean {
    return authStore.isAuthenticated
  }
}
</script>

<style scoped>

</style>
