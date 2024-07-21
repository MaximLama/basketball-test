import type { BaseSelectOption } from '@/interfaces/BaseSelectOption'
import type TeamsSelect from '@/interfaces/TeamsSelect'
import { computed, provide, ref } from 'vue'
import { useRoute } from 'vue-router'

export default function useTeamsSelect() {
  const route = useRoute()

  const selectOptions = ref<BaseSelectOption[]>([])

  const isSelectActive = computed<boolean>(() => {
    return route.meta.showSelect === true
  })

  const selectValues = ref<(string | number)[] | undefined>([])

  const onChange = (values: (string | number)[] | undefined) => {
    console.log('change')
    selectValues.value = values
  }

  const setSelectOptions = (options: BaseSelectOption[]) => {
    selectOptions.value = options
  }

  provide<TeamsSelect>('teamsSelect', { setSelectOptions })

  return { isSelectActive, selectOptions, onChange, selectValues }
}
