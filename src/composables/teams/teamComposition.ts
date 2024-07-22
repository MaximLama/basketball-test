import type Player from '@/api/dto/players/Player'
import { toRef } from 'vue'

export default function useTeamComposition(props: { players: Player[] }) {
  const players = toRef(() => props.players)

  const isLast = (index?: number) => {
    return typeof index === 'undefined'
      ? players.value.length === 0
      : index === players.value.length - 1
  }

  return { players, isLast }
}
