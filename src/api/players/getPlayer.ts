import http from '@/api/http/http'
import type PlayerDetail from '../dto/players/PlayerDetail'

async function getPlayer(id: number): Promise<PlayerDetail> {
  return (await http.get('Player/Get', { params: { id } })).data
}

export { getPlayer }
