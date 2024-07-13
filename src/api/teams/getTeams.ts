import type Teams from '@/api/dto/teams/Teams'
import http from '@/api/http/http'

async function getTeams(): Promise<Teams> {
  return (await http.get('Team/GetTeams')).data
}

export { getTeams }
