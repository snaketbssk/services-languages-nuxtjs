<template>
  <v-app-bar
    fixed
    app
    color="primary"
  >
    <v-toolbar-items>
      <v-btn
        to="/"
      >
        {{ title }}
      </v-btn>
    </v-toolbar-items>
    <v-spacer />
    <div
      v-if="!isAuthenticated"
    >
      <LoginButton />
      <RegisterButton />
    </div>
    <!--    <template-->
    <!--      v-if="!isAuthenticated"-->
    <!--    >-->
    <!--      <v-toolbar-items>-->
    <!--        <v-btn-->
    <!--          :to="login"-->
    <!--          color="primary"-->
    <!--        >-->
    <!--          Login-->
    <!--        </v-btn>-->
    <!--        <v-btn-->
    <!--          :to="register"-->
    <!--          color="secondary"-->
    <!--        >-->
    <!--          Register-->
    <!--        </v-btn>-->
    <!--      </v-toolbar-items>-->
    <!--    </template>-->
    <template
      v-else
    >
      <v-toolbar-items>
        <v-btn
          to="/admin/language/create"
        >
          Create language
        </v-btn>
        <v-btn
          to="/admin/languages"
        >
          Languages
        </v-btn>
        <v-btn
          to="/admin/language-pair/create"
        >
          Create language pair
        </v-btn>
        <v-btn
          to="/admin/language-pairs"
        >
          language pairs
        </v-btn>
        <v-btn
          to="/admin/word/create"
        >
          Create word
        </v-btn>
        <v-btn
          to="/admin/words"
        >
          Words
        </v-btn>
        <ProfileButton />
        <LogoutButton />
      </v-toolbar-items>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ProfileMenu from '../menus/ProfileMenu.vue'
import ProfileButton from '../buttons/ProfileButton.vue'
import RegisterButton from '../buttons/RegisterButton.vue'
import { authStore } from '~/utils/store-accessor'
import LogoutButton from '~/components/ui/buttons/LogoutButton.vue'
import LoginButton from '~/components/ui/buttons/LoginButton.vue'

@Component({
  name: 'Header',
  components: { LogoutButton, ProfileMenu, ProfileButton, LoginButton, RegisterButton }
})
export default class Header extends Vue {
  title: string = 'Languages'

  get login (): string {
    return '/authorization/login'
  }

  get register (): string {
    return '/authorization/login'
  }

  get isAuthenticated (): boolean {
    return authStore.isAuthenticated
  }
}
</script>

<style scoped>

</style>
