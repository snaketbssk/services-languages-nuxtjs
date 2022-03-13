import { IWordTable } from '~/models/Tables/IWordTable'

export class Compare {
  first: boolean
  show: boolean
  selected: boolean
  word: string
  wordTable: IWordTable
  constructor (
    first: boolean,
    show: boolean,
    selected: boolean,
    word: string,
    wordTable: IWordTable) {
    this.first = first
    this.show = show
    this.selected = selected
    this.word = word
    this.wordTable = wordTable
  }
}
