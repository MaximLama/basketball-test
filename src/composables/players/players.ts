import type GetPlayersRequest from '@/api/dto/players/GetPlayersRequest'
import { inject, onMounted, ref, toRef, watch } from 'vue'
import { getPlayers as getPlayersRequest } from '@/api/players/getPlayers'
import type Player from '@/api/dto/players/Player'
import type Pagination from '@/interfaces/Pagination'
import { useRouter } from 'vue-router'
import type Team from '@/api/dto/teams/Team'
import { getTeams as getTeamsRequest } from '@/api/teams/getTeams'
import type TeamsSelect from '@/interfaces/TeamsSelect'

export default function usePlayers(props: { params: GetPlayersRequest }) {
  const teams = ref<Team[]>([])
  const players = ref<Player[]>([])
  const isEmpty = ref(false)

  const params = toRef(() => props.params)

  const { setPageCount } = inject('pagination') as Pagination

  const router = useRouter()

  const { setSelectOptions } = inject('teamsSelect') as TeamsSelect

  onMounted(async () => {
    await getPlayers()
    await getTeams()
    setSelectOptions(teams.value)
  })

  const getPlayers = async () => {
    const playersInfo = await getPlayersRequest(params.value)
    players.value = playersInfo.data
    const pageCount = Math.ceil(playersInfo.count / params.value.pageSize)
    setPageCount(pageCount)
    isEmpty.value = playersInfo.count === 0

    if (pageCount < playersInfo.page && playersInfo.page > 1) {
      router.push({
        query: {
          page: pageCount
        }
      })
    }
  }

  const getTeams = async () => {
    const teamsInfo = await getTeamsRequest()
    teams.value = teamsInfo.data
  }

  watch(
    params,
    () => {
      console.log(params)
      getPlayers()
    },
    {
      deep: true
    }
  )

  const findTeam = (id: number) => (el: Team) => el.id === id

  return { players, teams, isEmpty, findTeam }
}
