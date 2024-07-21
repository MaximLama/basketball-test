export default interface GetPlayersRequest {
  pageSize: number
  page: number
  name?: string
  teamIds: number[] | undefined
}
