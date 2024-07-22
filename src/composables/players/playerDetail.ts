import type PlayerDetail from '@/api/dto/players/PlayerDetail'
import Error404 from '@/errors/error404'
import { RouteNamesEnum } from '@/router/router.types'
import { usePlayerStore } from '@/stores/players'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default function usePlayerDetail() {
  const route = useRoute()
  const router = useRouter()

  const player = ref<PlayerDetail | null>()
  const playerStore = usePlayerStore()

  const getPlayer = async () => {
    const id = parseInt(route.params.id as string)
    try {
      player.value = await playerStore.getPlayer(id)
    } catch (e) {
      if (e instanceof Error404) {
        router.push({ name: RouteNamesEnum.error404 })
      }
    }
  }

  onMounted(async () => {
    await getPlayer()
  })

  return player
}
