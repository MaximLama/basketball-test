import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuth?: boolean

    //show position select
    showSelect?: boolean

    //link for "add" button
    addButtonTo?: RouteLocationAsRelativeGeneric
  }
}
