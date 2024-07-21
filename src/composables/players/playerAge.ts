import { computed } from 'vue'

export default function usePlayerAge(birthday: string | Date | undefined) {
  return computed(() => {
    if (!birthday) return undefined
    const today = new Date()
    const birth = new Date(birthday)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDifference = today.getMonth() - birth.getMonth()

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--
    }

    return age
  })
}
