import type CheckboxProps from '@/interfaces/CheckboxProps'
import { useField } from 'vee-validate'
import { toRefs } from 'vue'

export default function useBaseCheckbox(props: CheckboxProps) {
  const { label, id, name, disabled } = toRefs(props)

  const { value, errorMessage, setErrors } = useField(name, undefined, {
    validateOnValueUpdate: false
  })

  const onChange = () => {
    setErrors([])
  }

  return { label, id, disabled, errorMessage, value, onChange }
}
