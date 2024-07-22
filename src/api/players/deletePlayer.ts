import type Player from '../dto/players/Player'
import http from '../http/http'

async function deletePlayer(id: number): Promise<Player> {
  return (await http.delete('Player/Delete', { params: { id } })).data
}

export { deletePlayer }
