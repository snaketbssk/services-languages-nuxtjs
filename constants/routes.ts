import { Location } from 'vue-router'

export type RouteKey = 'INDEX'

export type IRoute = {
  [key in RouteKey]: Location
}

export const ROUTE: IRoute = {
  INDEX: { name: 'index' }
}
