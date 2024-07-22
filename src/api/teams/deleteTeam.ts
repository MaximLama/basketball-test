import type Team from '../dto/teams/Team'
import http from '../http/http'

async function deleteTeam(id: number): Promise<Team> {
  return (await http.delete('Team/Delete', { params: { id } })).data
}

export { deleteTeam }
