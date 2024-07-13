import type Team from '@/api/dto/teams/Team'

export default interface Teams {
  data: Team[]
  count: number
  page: number
  size: number
}
