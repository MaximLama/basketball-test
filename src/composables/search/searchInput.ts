import { toRef } from 'vue'

export default function useSearchInput() {
  const props = defineProps<{
    value: string
  }>()

  const value = toRef(() => props.value)

  const emit = defineEmits<{
    change: [value: string]
  }>()

  const onChange = (e: Event) => {
    emit('change', (e.target as HTMLInputElement).value)
  }

  return { value, onChange }
}
