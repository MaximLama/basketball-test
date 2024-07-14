import type Pagination from '@/interfaces/Pagination'
import { computed, provide, ref } from 'vue'
import { useRoute } from 'vue-router'

export default function usePagination() {
  const route = useRoute()

  const paginationOptions = ref([6, 12, 24])
  const pageCount = ref(0)
  const currentPage = computed(() =>
    route.query.page ? parseInt(route.query.page as unknown as string) : 1
  )

  const pageSize = ref(0)

  const setPageCount = (value: number) => {
    pageCount.value = value
  }

  const setPageSize = (value: number) => {
    pageSize.value = value
  }

  provide<Pagination>('pagination', {
    setPageCount,
    setPageSize
  })

  return { paginationOptions, pageSize, currentPage, pageCount }
}
