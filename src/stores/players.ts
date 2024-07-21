import type PlayerDetail from '@/api/dto/players/PlayerDetail'
import type PlayerRequest from '@/api/dto/players/PlayerRequest'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { addPlayer as addPlayerRequest } from '@/api/players/addPlayer'
import { useTeamStore } from './teams'
import { getPlayer as getPlayerRequest } from '@/api/players/getPlayer'
import { editPlayer as editedPlayerRequest } from '@/api/players/editPlayer'
import type Player from '@/api/dto/players/Player'
import { getPositions as getPositionsRequest } from '@/api/players/getPositions'
import Error404 from '@/errors/error404'

interface PlayersStore {
  [key: PlayerDetail['id']]: PlayerDetail
}

export const usePlayerStore = defineStore('player', () => {
  const players = ref<PlayersStore>({})
  const positions = ref<string[]>([])
  const teamStore = useTeamStore()

  const addPlayer = async (player: PlayerRequest) => {
    const newPlayer: PlayerDetail = await addPlayerRequest(player)
    if (newPlayer.team) {
      try {
        const team = await teamStore.getTeam(newPlayer.team)
        newPlayer.teamName = team.name
      } catch (e) {
        if (e instanceof Error404) {
          newPlayer.teamName = undefined
        }
      }
    }
    players.value[newPlayer.id] = newPlayer
  }

  const getPlayer = async (id: number) => {
    if (!(id in players.value)) {
      const player = await getPlayerRequest(id)
      players.value[player.id] = player
    }

    return players.value[id]
  }

  const editPlayer = async (player: Player) => {
    const editedPlayer: PlayerDetail = await editedPlayerRequest(player)
    if (editedPlayer.team) {
      try {
        const team = await teamStore.getTeam(editedPlayer.team)
        editedPlayer.teamName = team.name
      } catch (e) {
        if (e instanceof Error404) {
          editedPlayer.team = undefined
          editedPlayer.teamName = undefined
        }
      }
    }
    players.value[editedPlayer.id] = editedPlayer
  }

  const getPositions = async () => {
    if (!positions.value.length) {
      positions.value = await getPositionsRequest()
    }

    return positions.value
  }

  return { players, addPlayer, getPlayer, editPlayer, getPositions }
})
