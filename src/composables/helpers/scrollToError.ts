import { toValue, type MaybeRef } from 'vue'

export default function useScrollToError(errors: MaybeRef<object>) {
  const firstError = Object.keys(toValue(errors))[0]
  const el = document.querySelector(`[name="${firstError}"]`) as HTMLElement | null
  el?.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  })
  el?.focus()
}
