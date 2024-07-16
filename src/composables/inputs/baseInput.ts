import type InputProps from '@/interfaces/InputProps'
import { useField } from 'vee-validate'
import { toRefs } from 'vue'

export default function useBaseInput(props: InputProps) {
  const { label, type, disabled, name } = toRefs(props)

  const { value, errorMessage, setErrors } = useField(name, undefined, {
    validateOnValueUpdate: false
  })

  const onChange = () => {
    setErrors([])
  }

  return { label, type, disabled, name, value, errorMessage, onChange }
}
