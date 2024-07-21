import type Player from './Player'

export default interface Players {
  data: Player[]
  count: number
  page: number
  size: number
}
