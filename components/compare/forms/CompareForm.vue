<template>
  <v-container>
    <v-row no-gutters>
      <template v-for="(word, i) in words">
        <v-col :key="i">
          <v-btn
            v-if="word.show"
            :color="getColor(word)"
            class="pa-3"
            block
            tile
            @click="onClick(word)"
          >
            {{ word.word }}
          </v-btn>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Inject, Vue } from 'nuxt-property-decorator'
import { Guid } from 'guid-typescript'
import { ServiceEnum } from '~/models/enums/ServiceEnum'
import { ILanguagesService } from '~/services/ILanguagesService'
import { Compare } from '~/models/Compare'

@Component({
  name: 'CompareForm'
})
export default class CompareForm extends Vue {
  @Inject(ServiceEnum.Languages)
  readonly languagesService!: ILanguagesService

  isLoading: boolean = true
  words: Compare[] = []
  selected: Compare | null = null

  getColor (word: Compare): string {
    return word.selected ? 'green' : ''
  }

  async onClick (word: Compare): Promise<void> {
    if (!this.selected) {
      this.selected = word
      word.selected = true
    } else {
      if (this.selected.wordTable.guid === word.wordTable.guid && !word.selected) {
        this.selected.show = false
        word.show = false
      } else {
        this.selected.selected = false
      }
      this.selected = null
    }
    for (let i = 0; i < this.words.length; i++) {
      const word = this.words[i]
      if (word.show) {
        return
      }
    }
    await this.load()
  }

  shuffleArray (array: Compare[]): Compare[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  async load (): Promise<void> {
    const guid = Guid.parse('b1801536-a2cb-4ace-a52d-5ee1cfe04bce')
    const wordTables = await this.languagesService.compare(guid)
    const words: Compare[] = []
    for (let i = 0; i < wordTables.length; i++) {
      const wordTable = wordTables[i]
      const first = new Compare(true, true, false, wordTable.from, wordTable)
      const second = new Compare(false, true, false, wordTable.to, wordTable)
      words.push(first)
      words.push(second)
    }
    this.words = this.shuffleArray(words)
  }

  async fetch (): Promise<void> {
    await this.load()
    this.isLoading = false
  }
}
</script>

<style scoped>

</style>
