import type Team from '@/api/dto/teams/Team'
import type BreadCrumbsProps from '@/interfaces/BreadcrumbsProps'
import { RouteNamesEnum } from '@/router/router.types'
import { useTeamStore } from '@/stores/teams'
import { computed, toRef } from 'vue'
import { useRouter } from 'vue-router'

export default function useTeamDetailCard(props: { team: Team }) {
  const team = toRef(() => props.team)
  const teamStore = useTeamStore()
  const router = useRouter()

  const breadcrumbs = computed<BreadCrumbsProps[]>(() => [
    {
      text: 'Teams',
      href: {
        name: RouteNamesEnum.teams
      }
    },
    {
      text: team.value.name
    }
  ])

  const deleteTeam = async () => {
    try {
      await teamStore.deleteTeam(team.value.id)
      router.push({ name: RouteNamesEnum.teams })
    } catch {
      alert('The command could not be deleted. Perhaps there are players in the team.')
    }
  }

  return { team, breadcrumbs, deleteTeam }
}
