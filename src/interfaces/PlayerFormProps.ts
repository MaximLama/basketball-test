import type PlayerRequest from '@/api/dto/players/PlayerRequest'
import type { AxiosError } from 'axios'
import type { BaseSelectOption } from './BaseSelectOption'

export default interface PlayerFormProps {
  submit: (values: PlayerRequest) => Promise<void>
  error: (e: AxiosError) => void
  player?: PlayerRequest
  positions: string[]
  teams: BaseSelectOption[]
}
