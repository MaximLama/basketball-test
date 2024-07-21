import http from '@/api/http/http'
import type PlayerRequest from '../dto/players/PlayerRequest'

async function addPlayer(player: PlayerRequest) {
  return (await http.post('Player/Add', player)).data
}

export { addPlayer }
