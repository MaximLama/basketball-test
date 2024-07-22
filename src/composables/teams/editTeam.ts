import type Team from '@/api/dto/teams/Team'
import type TeamRequest from '@/api/dto/teams/TeamRequest'
import type TeamForm from '@/components/Forms/TeamForm.vue'
import Error404 from '@/errors/error404'
import type BreadCrumbsProps from '@/interfaces/BreadcrumbsProps'
import { RouteNamesEnum } from '@/router/router.types'
import { useTeamStore } from '@/stores/teams'
import type { AxiosError } from 'axios'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default function useEditTeam(form: Ref<InstanceType<typeof TeamForm> | undefined>) {
  const breadcrumbs = ref<BreadCrumbsProps[]>([
    {
      text: 'Teams',
      href: {
        name: RouteNamesEnum.teams
      }
    },
    {
      text: 'Edit team'
    }
  ])

  const team = ref<Team>()
  const route = useRoute()
  const router = useRouter()
  const teamStore = useTeamStore()

  onMounted(async () => {
    const id = parseInt(route.params.id as string)
    try {
      team.value = await teamStore.getTeam(id)
    } catch (e) {
      if (e instanceof Error404) {
        router.push({ name: RouteNamesEnum.error404 })
      }
    }
  })

  const onSubmit = async (values: TeamRequest) => {
    if (team.value) {
      await teamStore.editTeam({ ...values, id: team.value.id })
      router.push({ name: RouteNamesEnum.team, params: { id: team.value.id } })
    }
  }
  const onError = (e: AxiosError) => {
    if (e.response?.status === 409) {
      form.value?.setFieldError('name', 'Given name already exists')
    }
  }

  return { breadcrumbs, onSubmit, onError, team }
}
