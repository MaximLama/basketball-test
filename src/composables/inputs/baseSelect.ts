import type BaseSelectProps from '@/interfaces/BaseSelectProps'
import { computed, ref, toRefs, type Ref } from 'vue'

export default function useBaseSelect(props: BaseSelectProps) {
  const { options, multiple, selectClass } = toRefs(props)

  const placeholder = ref('Select..')

  /* if multiple == false */
  const selected = ref('')
  /* endif */

  /* if multiple == true */
  const tags: Ref<Set<string>> = ref(new Set())
  /* endif */

  const select = computed<(value: string) => void>(() => {
    return multiple?.value
      ? (value: string) =>
          tags.value.has(value) ? tags.value.delete(value) : tags.value.add(value)
      : (value: string) => {
          selected.value = value
          active.value = false
        }
  })

  const clear = computed<() => void>(() => {
    return multiple?.value ? () => (tags.value = new Set()) : () => (selected.value = '')
  })

  const removeTag = (tag: string) => tags.value.delete(tag)

  /* active flags */
  const active = ref(false)
  const activePlaceholder = computed<boolean>(() => {
    return multiple?.value ? tags.value.size == 0 : selected.value.length == 0
  })
  const activeClear = computed<boolean>(() => {
    return multiple?.value ? tags.value.size > 0 : selected.value.length > 0
  })

  return {
    tags,
    options,
    selectClass,
    placeholder,
    select,
    selected,
    clear,
    removeTag,
    active,
    activePlaceholder,
    activeClear
  }
}
