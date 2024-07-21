import type { BaseSelectOption } from './BaseSelectOption'

export default interface TeamsSelect {
  setSelectOptions: (options: BaseSelectOption[]) => void
}
