import { useField } from 'vee-validate'
import { ref } from 'vue'

export default function useUploadInput(
  props: { name: string },
  emit: (evt: 'change', file: File | null) => void
) {
  const { value: imageUrl, errorMessage } = useField<string | undefined>(props.name)

  const file = ref<File | null>(null)

  const onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files.length > 0 && target.files[0].type.startsWith('image')) {
      file.value = target.files[0]
    } else {
      file.value = null
    }
    emit('change', file.value)
  }

  return { imageUrl, errorMessage, onFileChange }
}
