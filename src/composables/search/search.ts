import { ref } from 'vue'

export default function useSearch() {
  const searchName = ref('')

  const setSearchName = (value: string) => {
    searchName.value = value
  }

  return { searchName, setSearchName }
}
