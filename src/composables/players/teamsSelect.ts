import type TeamsSelect from '@/interfaces/TeamsSelect'
import { computed, provide, ref } from 'vue'
import { useRoute } from 'vue-router'

export default function useTeamsSelect() {
  const route = useRoute()

  const selectOptions = ref<string[]>([])

  const isSelectActive = computed<boolean>(() => {
    return route.meta.showSelect === true
  })

  const setSelectOptions = (options: string[]) => {
    selectOptions.value = options
  }

  provide<TeamsSelect>('teamsSelect', { setSelectOptions })

  return { isSelectActive, selectOptions }
}
