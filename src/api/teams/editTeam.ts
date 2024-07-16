import http from '@/api/http/http'
import type Team from '@/api/dto/teams/Team'

async function editTeam(team: Team) {
  return (await http.put('Team/Update', team)).data
}

export { editTeam }
