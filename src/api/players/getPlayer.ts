import http from '@/api/http/http'
import type PlayerDetail from '../dto/players/PlayerDetail'
import Error404 from '@/errors/error404'

async function getPlayer(id: number): Promise<PlayerDetail> {
  const player = (await http.get('Player/Get', { params: { id } })).data
  if (!player) {
    throw new Error404()
  }
  return player
}

export { getPlayer }
