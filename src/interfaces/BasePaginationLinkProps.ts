import type { RouteLocationRaw } from 'vue-router'

export default interface BasePaginationLinkProps {
  href: RouteLocationRaw
  page: number
}
