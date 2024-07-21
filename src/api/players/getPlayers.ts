import http from '@/api/http/http'
import type GetPlayersRequest from '../dto/players/GetPlayersRequest'
import type Players from '../dto/players/Players'

async function getPlayers(params?: GetPlayersRequest): Promise<Players> {
  return (await http.get('Player/GetPlayers', { params, paramsSerializer: { indexes: true } })).data
}

export { getPlayers }
