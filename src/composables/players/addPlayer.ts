import type BreadCrumbsProps from '@/interfaces/BreadcrumbsProps'
import { RouteNamesEnum } from '@/router/router.types'
import { onMounted, ref, type Ref } from 'vue'
import PlayerForm from '@/components/Forms/PlayerForm.vue'
import { usePlayerStore } from '@/stores/players'
import { useRouter } from 'vue-router'
import type PlayerRequest from '@/api/dto/players/PlayerRequest'
import type { AxiosError } from 'axios'
import type Team from '@/api/dto/teams/Team'
import { getTeams } from '@/api/teams/getTeams'

export default function useAddPlayer(form: Ref<InstanceType<typeof PlayerForm> | undefined>) {
  const breadcrumbs = ref<BreadCrumbsProps[]>([
    {
      text: 'Players',
      href: {
        name: RouteNamesEnum.players
      }
    },
    {
      text: 'Add new player'
    }
  ])

  const playerStore = usePlayerStore()
  const router = useRouter()

  const onSubmit = async (values: PlayerRequest) => {
    await playerStore.addPlayer(values)
    router.push({ name: RouteNamesEnum.players })
  }

  const onError = (e: AxiosError) => {
    if (e.response?.status === 409) {
      form.value?.setFieldError('name', 'Given name already exists')
    }
  }

  const positions = ref<string[]>([])
  const teams = ref<Team[]>([])

  onMounted(async () => {
    positions.value = await playerStore.getPositions()
    teams.value = (await getTeams()).data
  })

  return { breadcrumbs, onSubmit, onError, positions, teams }
}
