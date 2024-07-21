import http from '@/api/http/http'

async function getPositions(): Promise<string[]> {
  return (await http.get('Player/GetPositions')).data
}

export { getPositions }
