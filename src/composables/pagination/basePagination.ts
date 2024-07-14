import { computed, toRefs } from 'vue'
import { useRouter } from 'vue-router'

interface BasePaginationProps {
  total: number
  currentPage: number
}

export default function useBasePagination() {
  const props = defineProps<BasePaginationProps>()

  const { total, currentPage: current } = toRefs(props)

  const router = useRouter()

  const premiddle = computed(() => {
    if (current.value <= 3) {
      return 2
    } else if (current.value >= total.value - 2) {
      return total.value - 3
    } else {
      return current.value - 1
    }
  })

  const middle = computed(() => {
    if (current.value <= 3) {
      return 3
    } else if (current.value >= total.value - 2) {
      return total.value - 2
    } else {
      return current.value
    }
  })

  const postmiddle = computed(() => {
    if (current.value <= 3) {
      return 4
    } else if (current.value >= total.value - 2) {
      return total.value - 1
    } else {
      return current.value + 1
    }
  })

  const prev = () => {
    if (current.value > 1) {
      router.push({ query: { page: current.value - 1 } })
    }
  }

  const next = () => {
    if (current.value < total.value) {
      router.push({ query: { page: current.value + 1 } })
    }
  }

  return { premiddle, middle, postmiddle, total, prev, next }
}
