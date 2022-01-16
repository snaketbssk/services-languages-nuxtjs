<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
      offset-y
    >
      <template #activator="{ on, attrs }">
        <v-btn
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{ login }}
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ firstName }}  {{ lastName }}</v-list-item-title>
              <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-list>
          <nuxt-link
            to="/settings"
            style="text-decoration: none; color: inherit;"
          >
            <v-list-item>
              <v-list-item-title>
                Settings
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>
          <nuxt-link
            to="/admin"
            style="text-decoration: none; color: inherit;"
          >
            <v-list-item>
              <v-list-item-title>
                Admin
              </v-list-item-title>
            </v-list-item>
          </nuxt-link>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { authStore } from '~/utils/store-accessor'

@Component({
  name: 'ProfileMenu'
})
export default class ProfileMenu extends Vue {
  menu: boolean = true
  message: boolean = false
  hints: boolean = true
  on = null
  attrs = null
  get login (): string {
    if (authStore.userTable) {
      return authStore.userTable.login
    }
    return ''
  }

  get email (): string {
    if (authStore.userTable) {
      return authStore.userTable.email
    }
    return ''
  }

  get firstName (): string {
    if (authStore.userTable) {
      return authStore.userTable.firstName
    }
    return ''
  }

  get lastName (): string {
    if (authStore.userTable) {
      return authStore.userTable.lastName
    }
    return ''
  }
}
</script>

<style scoped>

</style>
