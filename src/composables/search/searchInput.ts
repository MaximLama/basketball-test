import { toRef } from 'vue'

export default function useSearchInput(
  props: { value: string },
  emit: (evt: 'change', value: string) => void
) {
  const value = toRef(() => props.value)

  const onChange = (e: Event) => {
    emit('change', (e.target as HTMLInputElement).value)
  }

  return { value, onChange }
}
