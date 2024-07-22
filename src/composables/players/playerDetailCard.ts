import type PlayerDetail from '@/api/dto/players/PlayerDetail'
import { usePlayerStore } from '@/stores/players'
import { ref, toRef } from 'vue'
import { useRouter } from 'vue-router'
import usePlayerAge from './playerAge'
import type BreadCrumbsProps from '@/interfaces/BreadcrumbsProps'
import { RouteNamesEnum } from '@/router/router.types'

export default function usePlayerDetailCard(props: { player: PlayerDetail }) {
  const player = toRef(() => props.player)
  const playerStore = usePlayerStore()

  const router = useRouter()

  const age = usePlayerAge(player.value.birthday)

  const breadcrumbs = ref<BreadCrumbsProps[]>([
    {
      text: 'Players',
      href: {
        name: RouteNamesEnum.players
      }
    },
    {
      text: player.value.name
    }
  ])

  const deletePlayer = async () => {
    await playerStore.deletePlayer(player.value.id)
    router.push({ name: RouteNamesEnum.players })
  }

  return { breadcrumbs, player, age, deletePlayer }
}
