import type LabelSelectProps from '@/interfaces/LabelSelectProps'
import { useField } from 'vee-validate'
import { toRefs } from 'vue'

export default function useLabelSelect(props: LabelSelectProps) {
  const { label, options, init } = toRefs(props)

  const { value: selectValue, errorMessage } = useField(() => props.name)

  const onChange = (value: string | number | undefined) => {
    selectValue.value = value
  }

  /*watch(
    () => init?.value,
    (newValue) => {
      //select.value.setValue(newValue)
    },
    {
      immediate: true
    }
  )*/

  return { label, options, errorMessage, onChange, init }
}
