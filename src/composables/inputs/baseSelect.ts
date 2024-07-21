import type { BaseSelectOption } from '@/interfaces/BaseSelectOption'
import type BaseSelectProps from '@/interfaces/BaseSelectProps'
import type IteratorSelectOption from '@/interfaces/IteratorSelectOption'
import { computed, ref, toRefs, watchEffect } from 'vue'

class SelectOptions {
  options = ref<BaseSelectOption[]>([])

  constructor(options: BaseSelectOption[]) {
    this.options.value = options
  }

  [Symbol.iterator]() {
    let index = 0
    const items = this.options.value

    return {
      next(): IteratorResult<IteratorSelectOption> {
        if (index < items.length) {
          const item = items[index]
          index++
          return {
            done: false,
            value: {
              name: typeof item === 'string' ? item : item.name,
              value: typeof item === 'string' ? item : item.id
            }
          }
        } else {
          return {
            done: true,
            value: undefined as any
          }
        }
      }
    }
  }
}

export default function useBaseSelect(
  props: BaseSelectProps,
  emit: ((evt: 'change', value: string | number | undefined) => void) &
    ((evt: 'changeMultiple', value: (string | number)[] | undefined) => void)
) {
  const { options, multiple, selectClass, init } = toRefs(props)

  const placeholder = ref('Select..')

  /* if multiple == false */
  const selected = ref<IteratorSelectOption>()
  /* endif */

  /* if multiple == true */
  const tags = ref<IteratorSelectOption[]>([])

  const indexOfTag = (value: IteratorSelectOption) => {
    let valueIndex = -1
    tags.value.forEach((tag, index) => {
      if (tag.value === value.value) {
        valueIndex = index
      }
    })
    return valueIndex
  }
  /* endif */

  const select = computed<(value: IteratorSelectOption) => void>(() => {
    return multiple?.value
      ? (value: IteratorSelectOption) => {
          const valueIndex = indexOfTag(value)
          valueIndex !== -1 ? tags.value.splice(valueIndex, 1) : tags.value.push(value)
          const ids = tags.value.map((el) => el.value)
          emit('changeMultiple', ids)
        }
      : (value: IteratorSelectOption) => {
          selected.value = value
          active.value = false
          emit('change', value.value)
        }
  })

  const clear = computed<() => void>(() => {
    return multiple?.value
      ? () => {
          tags.value = [] as IteratorSelectOption[]
          emit('changeMultiple', undefined)
        }
      : () => {
          selected.value = undefined
          emit('change', undefined)
        }
  })

  const removeTag = (tag: IteratorSelectOption) => {
    const index = indexOfTag(tag)
    if (index !== -1) {
      tags.value.splice(index, 1)
    }
  }

  /* active flags */
  const active = ref(false)
  const activePlaceholder = computed<boolean>(() => {
    return multiple?.value ? tags.value.length == 0 : !selected.value
  })
  const activeClear = computed<boolean>(() => {
    return multiple?.value ? tags.value.length > 0 : Boolean(selected.value)
  })

  const selectOptions = computed(() => new SelectOptions(options.value))

  watchEffect(() => {
    for (const option of selectOptions.value) {
      if (option.value === init?.value) {
        select.value(option)
        break
      }
    }
  })

  return {
    tags,
    selectClass,
    placeholder,
    select,
    selected,
    clear,
    removeTag,
    active,
    activePlaceholder,
    activeClear,
    selectOptions,
    indexOfTag
  }
}
