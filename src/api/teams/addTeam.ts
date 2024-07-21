import type TeamRequest from '@/api/dto/teams/TeamRequest'
import http from '@/api/http/http'
import type Team from '../dto/teams/Team'

async function addTeam(team: TeamRequest): Promise<Team> {
  return (await http.post('Team/Add', team)).data
}

export { addTeam }
