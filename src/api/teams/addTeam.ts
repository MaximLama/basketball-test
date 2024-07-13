import type TeamRequest from '@/api/dto/teams/TeamRequest'
import http from '@/api/http/http'

async function addTeam(team: TeamRequest) {
  return (await http.post('Team/Add', team)).data
}

export { addTeam }
