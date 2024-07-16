import type PrimaryMenuItemProps from '@/interfaces/PrimaryMenuItemProps'
import { computed, toRefs } from 'vue'
import {
  useRoute,
  useRouter,
  type RouteLocationNormalizedLoadedGeneric,
  type RouteRecord,
  type RouteRecordRaw
} from 'vue-router'

export default function usePrimaryMenuItem(props: PrimaryMenuItemProps) {
  const route = useRoute()
  const router = useRouter()

  const { svg, href, name, baseRoute } = toRefs(props)

  const hasChild = (
    parentRoute: RouteRecord | RouteRecordRaw,
    childRoute: RouteLocationNormalizedLoadedGeneric
  ) => {
    if (!parentRoute.children) return false
    if (parentRoute.children.length === 0) return false
    let isChild = parentRoute.children.some((child) => child.name === route.name)
    if (isChild) return isChild
    parentRoute.children.forEach((item) => {
      if (hasChild(item, childRoute)) {
        isChild = true
      }
    })
    return isChild
  }

  const isChildRoute = computed(() => {
    const parentRoute = router.getRoutes().find((r) => r.name === baseRoute.value.name)
    if (!parentRoute) return false
    return hasChild(parentRoute, route)
  })

  return { svg, href, name, isChildRoute }
}
