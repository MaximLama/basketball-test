export default interface PlayerRequest {
  name: string
  number?: number
  position: string
  team?: number
  birthday?: Date | string
  height?: number
  weight?: number
  avatarUrl?: string
}
