import http from '@/api/http/http'
import type Team from '@/api/dto/teams/Team'
import Error404 from '@/errors/error404'

async function getTeam(id: number): Promise<Team> {
  const team: Team | '' = (await http.get('Team/Get', { params: { id } })).data
  if (!team) {
    throw new Error404()
  }
  return team
}

export { getTeam }
