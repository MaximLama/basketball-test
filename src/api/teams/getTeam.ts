import http from '@/api/http/http'
import type Team from '@/api/dto/teams/Team'

async function getTeam(id: number): Promise<Team> {
  return (await http.get('Team/Get', { params: { id } })).data
}

export { getTeam }
