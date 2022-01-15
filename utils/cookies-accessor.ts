import { NuxtCookies } from 'cookie-universal-nuxt'

let $cookies: NuxtCookies

export function initializeCookies (cookiesInstance: NuxtCookies) : void {
  $cookies = cookiesInstance
}

export {
  $cookies
}
