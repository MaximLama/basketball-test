import type Teams from '@/api/dto/teams/Teams'
import http from '@/api/http/http'
import type GetTeamsRequest from '../dto/teams/GetTeamsRequest'

async function getTeams(params?: GetTeamsRequest): Promise<Teams> {
  return (await http.get('Team/GetTeams', { params })).data
}

export { getTeams }
