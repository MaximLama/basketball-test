import http from '@/api/http/http'
import type PlayerRequest from '../dto/players/PlayerRequest'
import type Player from '../dto/players/Player'

async function addPlayer(player: PlayerRequest): Promise<Player> {
  return (await http.post('Player/Add', player)).data
}

export { addPlayer }
