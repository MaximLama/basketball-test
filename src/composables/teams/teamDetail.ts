import type Player from '@/api/dto/players/Player'
import type Team from '@/api/dto/teams/Team'
import Error404 from '@/errors/error404'
import { RouteNamesEnum } from '@/router/router.types'
import { useTeamStore } from '@/stores/teams'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default function useTeamDetail() {
  const route = useRoute()
  const router = useRouter()

  const team = ref<Team | null>()
  const players = ref<Player[]>([])

  const teamStore = useTeamStore()

  const getTeam = async () => {
    const id = parseInt(route.params.id as string)
    let teamInfo
    try {
      teamInfo = await teamStore.getTeam(id)
      team.value = teamInfo
      players.value = teamInfo.players || []
    } catch (e) {
      if (e instanceof Error404) {
        router.push({ name: RouteNamesEnum.error404 })
      }
    }
  }

  onMounted(async () => {
    await getTeam()
  })

  return { team, players }
}
