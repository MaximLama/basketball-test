import http from '@/api/http/http'
import type Player from '@/api/dto/players/Player'

async function editPlayer(player: Player): Promise<Player> {
  return (await http.put('Player/Update', player)).data
}

export { editPlayer }
