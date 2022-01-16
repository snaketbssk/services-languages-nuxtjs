<template>
  <v-app-bar
    fixed
    app
  >
    <v-toolbar-items>
      <v-btn
        to="/"
      >
        {{ title }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
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
        <ProfileButton />
        <LogoutButton />
      </v-toolbar-items>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ProfileMenu from './menus/ProfileMenu.vue'
import ProfileButton from './buttons/ProfileButton.vue'
import { authStore } from '~/utils/store-accessor'
import LogoutButton from '~/components/ui/buttons/LogoutButton.vue'

@Component({
  name: 'HeaderUI',
  components: { LogoutButton, ProfileMenu, ProfileButton }
})
export default class HeaderUI extends Vue {
  title: string = 'Languages'

  get isAuthenticated (): boolean {
    return authStore.isAuthenticated
  }
}
</script>

<style scoped>

</style>
