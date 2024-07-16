import type Pagination from '@/interfaces/Pagination'
import { inject, ref, toRef } from 'vue'

export default function usePaginationSelect(props: { options?: number[] }) {
  const { setPageSize } = inject('pagination') as Pagination

  const options = toRef(() => props.options)
  const selected = ref(options.value?.length ? options.value[0] : 0)
  setPageSize(selected.value)

  const select = (value: number) => {
    selected.value = value
    setPageSize(value)
    active.value = false
  }

  const active = ref(false)

  return { select, active, selected, options }
}
