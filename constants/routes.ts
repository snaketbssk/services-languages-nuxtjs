import { Location } from 'vue-router'

export type RouteKey = 'INDEX' | 'AUTHORIZATION_LOGIN'

export type IRoutes = {
  [key in RouteKey]: Location
}

export const ROUTES: IRoutes = {
  INDEX: { name: 'index' },
  AUTHORIZATION_LOGIN: { name: 'authorization/login' }
}
