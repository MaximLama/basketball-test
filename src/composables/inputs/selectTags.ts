import type TagsProps from '@/interfaces/TagsProps'
import { onMounted, onUpdated, ref, toRef } from 'vue'

export default function useSelectTags(props: TagsProps) {
  const tags = toRef(() => props.tags)

  const tagsEl = ref<HTMLElement | null>(null)

  const handleTags = () => {
    if (!tagsEl.value) return
    const tagsCollection = tagsEl.value.children
    const tagsBounds = tagsEl.value.getBoundingClientRect()

    const moreTag = tagsEl.value.getElementsByClassName('more').item(0)
    if (!moreTag) return

    // на время проверки тегов прячем more тег
    if (moreTag.classList.contains('hide')) {
      moreTag.classList.add('hide')
    }

    // спрятать теги выходящие за границы
    for (let i = 0; i < tagsCollection.length; i++) {
      const tagEl = tagsCollection.item(i)
      if (!tagEl) continue
      const tagBound = tagEl.getBoundingClientRect()
      if (
        Math.round(tagsBounds.right) >= Math.round(tagBound.right) &&
        tagEl.classList.contains('hide')
      ) {
        tagEl.classList.remove('hide')
      } else if (
        Math.round(tagsBounds.right) < Math.round(tagBound.right) &&
        !tagEl.classList.contains('hide')
      ) {
        tagEl.classList.add('hide')
      }
    }

    //показываем moreTag
    moreTag.classList.remove('hide')
    const moreTagBounds = moreTag.getBoundingClientRect()

    const hiddenTags = tagsEl.value.querySelectorAll('.hide')
    if (hiddenTags.length > 0) {
      if (Math.round(moreTagBounds.right) > Math.round(tagsBounds.right)) {
        const visibleTags = tagsEl.value.querySelectorAll('.tag:not(.hide):not(.more)')
        const lastVisibleTag = visibleTags.length ? visibleTags.item(visibleTags.length - 1) : null
        if (lastVisibleTag) {
          lastVisibleTag.classList.add('hide')
        }
        moreTag.classList.remove('hide')
      }
    } else {
      moreTag.classList.add('hide')
    }
  }

  onMounted(handleTags)
  onUpdated(handleTags)

  return tags
}
