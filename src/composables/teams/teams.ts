import type GetTeamsRequest from '@/api/dto/teams/GetTeamsRequest'
import type Team from '@/api/dto/teams/Team'
import type Pagination from '@/interfaces/Pagination'
import { inject, onMounted, ref, toRef, watch } from 'vue'
import { useRouter } from 'vue-router'
import { getTeams as getTeamsRequest } from '@/api/teams/getTeams'

export default function useTeams(props: { params: GetTeamsRequest }) {
  const teams = ref<Team[]>([])
  const isEmpty = ref(false)

  const params = toRef(() => props.params)

  const { setPageCount } = inject('pagination') as Pagination

  const router = useRouter()

  onMounted(async () => {
    await getTeams()
  })

  const getTeams = async () => {
    const teamsInfo = await getTeamsRequest(params.value)
    teams.value = teamsInfo.data
    const pageCount = Math.ceil(teamsInfo.count / params.value.pageSize)
    setPageCount(pageCount)
    isEmpty.value = teamsInfo.count === 0

    if (pageCount < teamsInfo.page && teamsInfo.page > 1) {
      router.push({
        query: {
          page: pageCount
        }
      })
    }
  }

  watch(params, () => getTeams(), {
    deep: true
  })

  return { teams, isEmpty }
}
