import type { BaseSelectOption } from './BaseSelectOption'

export default interface LabelSelectProps {
  label: string
  name: string
  options: BaseSelectOption[]
  init?: string | number
}
