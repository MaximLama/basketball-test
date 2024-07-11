import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import useRemoveUserFromLocalStorage from '../user/removeFromLocalStorage'
import { RouteNamesEnum } from '@/router/router.types'

export default function useLogout() {
  const userStore = useUserStore()
  const router = useRouter()

  const logout = async () => {
    userStore.logout()
    useRemoveUserFromLocalStorage()
    router.push({ name: RouteNamesEnum.signin })
  }

  return { logout }
}
