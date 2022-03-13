<template>
  <v-app light>
    <Header />
    <MainUI />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Footer from '~/components/ui/footers/Footer.vue'
import Header from '~/components/ui/headers/Header.vue'
import MainUI from '~/components/ui/MainUI.vue'

@Component({
  name: 'DefaultLayout',
  components: { Header, MainUI, Footer }
})
export default class DefaultLayout extends Vue {
  clipped: boolean = false
  drawer: boolean = false
  fixed: boolean = false
  miniVariant: boolean = false
  right: boolean = true
  rightDrawer: boolean = false
  items = [
    {
      icon: 'mdi-apps',
      title: 'Welcome',
      to: '/'
    },
    {
      icon: 'mdi-chart-bubble',
      title: 'Inspire',
      to: '/inspire'
    }
  ]
}
</script>
