<template>
  <div>
    <CompareForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Middlewares } from '~/constants/middlewares'
import CompareForm from '~/components/compare/forms/CompareForm.vue'

@Component({
  name: 'LoginAuthorizationPage',
  components: { CompareForm },
  middleware: [Middlewares.CHECK_AUTH]
})
export default class ComparePage extends Vue {

}
</script>

<style scoped>

</style>
