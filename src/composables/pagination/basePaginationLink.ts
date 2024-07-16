import type BasePaginationLinkProps from '@/interfaces/BasePaginationLinkProps'
import { computed, toRefs } from 'vue'
import { useRoute } from 'vue-router'

export default function useBasePaginationLink(props: BasePaginationLinkProps) {
  const route = useRoute()
  const { href, page } = toRefs(props)

  const routePage = computed(() => {
    return (route.query.page === null || route.query.page === undefined
      ? 1
      : route.query.page) as unknown as number
  })
  const isActive = computed(() => {
    return routePage.value == page.value
  })

  return { href, isActive }
}
