import type TeamRequest from '@/api/dto/teams/TeamRequest'
import type TeamForm from '@/components/Forms/TeamForm.vue'
import type BreadCrumbsProps from '@/interfaces/BreadcrumbsProps'
import { RouteNamesEnum } from '@/router/router.types'
import { useTeamStore } from '@/stores/teams'
import type { AxiosError } from 'axios'
import { ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'

export default function useAddTeam(form: Ref<InstanceType<typeof TeamForm> | undefined>) {
  const breadcrumbs = ref<BreadCrumbsProps[]>([
    {
      text: 'Teams',
      href: {
        name: RouteNamesEnum.teams
      }
    },
    {
      text: 'Add new team'
    }
  ])

  const teamStore = useTeamStore()
  const router = useRouter()

  const onSubmit = async (values: TeamRequest) => {
    await teamStore.addTeam(values)
    router.push({ name: RouteNamesEnum.teams })
  }

  const onError = (e: AxiosError) => {
    if (e.response?.status === 409) {
      form.value?.setFieldError('name', 'Given name already exists')
    }
  }

  return { breadcrumbs, onSubmit, onError }
}
