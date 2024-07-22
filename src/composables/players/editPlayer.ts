import type Player from '@/api/dto/players/Player'
import type PlayerRequest from '@/api/dto/players/PlayerRequest'
import type Team from '@/api/dto/teams/Team'
import { getTeams } from '@/api/teams/getTeams'
import type PlayerForm from '@/components/Forms/PlayerForm.vue'
import Error404 from '@/errors/error404'
import type BreadCrumbsProps from '@/interfaces/BreadcrumbsProps'
import { RouteNamesEnum } from '@/router/router.types'
import { usePlayerStore } from '@/stores/players'
import type { AxiosError } from 'axios'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default function useEditPlayer(form: Ref<InstanceType<typeof PlayerForm> | undefined>) {
  const breadcrumbs = ref<BreadCrumbsProps[]>([
    {
      text: 'Players',
      href: {
        name: RouteNamesEnum.players
      }
    },
    {
      text: 'Edit player'
    }
  ])

  const route = useRoute()
  const router = useRouter()
  const positions = ref<string[]>([])
  const teams = ref<Team[]>([])
  const player = ref<Player>()
  const playerStore = usePlayerStore()

  onMounted(async () => {
    const id = parseInt(route.params.id as string)
    try {
      player.value = await playerStore.getPlayer(id)
    } catch (e) {
      if (e instanceof Error404) {
        router.push({ name: RouteNamesEnum.error404 })
      }
    }
    positions.value = await playerStore.getPositions()
    teams.value = (await getTeams()).data
  })

  const onSubmit = async (values: PlayerRequest) => {
    if (player.value) {
      await playerStore.editPlayer({ ...values, id: player.value.id })
      router.push({ name: RouteNamesEnum.player, params: { id: player.value.id } })
    }
  }

  const onError = (e: AxiosError) => {
    if (e.response?.status === 409) {
      form.value?.setFieldError('name', 'Given name already exists')
    }
  }

  return { breadcrumbs, onSubmit, onError, player, teams, positions }
}
