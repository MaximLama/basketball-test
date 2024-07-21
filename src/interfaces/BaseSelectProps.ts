import type { BaseSelectOption } from '@/interfaces/BaseSelectOption'

export default interface BaseSelectProps {
  options: BaseSelectOption[]
  multiple?: boolean
  selectClass?: string
  init?: string | number
}
