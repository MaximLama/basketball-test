import type InputProps from '@/interfaces/InputProps'
import { useField } from 'vee-validate'
import { ref, toRefs } from 'vue'

export default function useBaseInput(props: InputProps) {
  const { label, type, disabled, name } = toRefs(props)

  const { value, errorMessage, setErrors } = useField(name, undefined, {
    validateOnValueUpdate: false
  })

  const onChange = () => {
    setErrors([])
  }

  const isEyeClosed = ref(true)

  const toggleEye = () => {
    if (props.type === 'password') {
      isEyeClosed.value = !isEyeClosed.value
    }
  }

  const getPasswordType = () => {
    return isEyeClosed.value ? 'password' : 'text'
  }

  return {
    label,
    type,
    disabled,
    name,
    value,
    errorMessage,
    onChange,
    isEyeClosed,
    toggleEye,
    getPasswordType
  }
}
