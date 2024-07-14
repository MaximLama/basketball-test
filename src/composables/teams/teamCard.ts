import type Team from '@/api/dto/teams/Team'
import { toRefs } from 'vue'

export default function useTeamCard() {
  const props = defineProps<{
    team: Team
  }>()

  const { id, name, foundationYear: year, imageUrl } = toRefs(props.team)

  return { id, name, year, imageUrl }
}
