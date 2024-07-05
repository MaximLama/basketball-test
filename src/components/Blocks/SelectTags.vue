<template>
  <div class="tags" ref="tagsEl">
    <div class="tag" v-for="tag in tags" :key="tag">
      <span>{{ tag }}</span>
      <div class="tag__icon" @click.prevent.stop="$emit('remove', tag)">
        <ClearIcon />
      </div>
    </div>
    <div class="tag more"><span>...</span></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SelectTags"
}

interface ITagsProps {
  tags: Set<string>
}
</script>

<script lang="ts" setup>
import { toRef, ref, onUpdated, type Ref, onMounted } from 'vue';
import ClearIcon from '@/components/Icons/ClearIcon.vue';

const props = withDefaults(defineProps<ITagsProps>(), {
  tags: () => new Set() as Set<string>
})
const tags = toRef(() => props.tags);

const tagsEl = ref<HTMLElement | null>(null);

const handleTags = () => {
  console.log("start handle");
  if (!tagsEl.value) return;
  const tagsCollection = tagsEl.value.children;
  const tagsBounds = tagsEl.value.getBoundingClientRect();

  const moreTag = tagsEl.value.getElementsByClassName('more').item(0);
  if (!moreTag) return;

  // на время проверки тегов прячем more тег
  if (moreTag.classList.contains('hide')) {
    moreTag.classList.add('hide');
  }

  // спрятать теги выходящие за границы
  for (let i = 0; i < tagsCollection.length; i++) {
    const tagEl = tagsCollection.item(i);
    if (!tagEl) continue;
    const tagBound = tagEl.getBoundingClientRect();
    console.log(tagEl, Math.round(tagsBounds.right), Math.round(tagBound.right));
    if (Math.round(tagsBounds.right) >= Math.round(tagBound.right) && tagEl.classList.contains('hide')) {
      tagEl.classList.remove('hide');
    }
    else if (Math.round(tagsBounds.right) < Math.round(tagBound.right) && !tagEl.classList.contains('hide')) {
      tagEl.classList.add('hide');
    }
  }

  //показываем moreTag
  moreTag.classList.remove('hide');
  const moreTagBounds = moreTag.getBoundingClientRect();

  const hiddenTags = tagsEl.value.querySelectorAll('.hide');
  if (hiddenTags.length > 0) {
    if (Math.round(moreTagBounds.right) > Math.round(tagsBounds.right)) {
      const visibleTags = tagsEl.value.querySelectorAll('.tag:not(.hide)');
      const lastVisibleTag = visibleTags.length ? visibleTags.item(visibleTags.length - 1) : null;
      if (lastVisibleTag) {
        lastVisibleTag.classList.add('hide');
      }
      moreTag.classList.remove('hide');
    }
  }
  else {
    moreTag.classList.add('hide');
  }
}

onMounted(handleTags);
onUpdated(handleTags);

defineEmits<{
  remove: [value: string]
}>();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.tags {
  width: 100%;
  display: flex;
  gap: 0.25rem;
  overflow: hidden;
  max-width: 17rem;
}

.tag {
  display: flex;
  height: 1.5rem;
  background: $red;
  border-radius: 0.25rem;
  padding: 0 0.25rem;
  align-items: center;
  gap: 0.5rem;
  color: $white;
  box-sizing: border-box;
  order: 1;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      flex-shrink: 0;
      height: 0.75rem;
      width: 0.75rem;
      fill: $white;
    }
  }
}

.hide {
  visibility: hidden;
  order: 3;
}

.more {
  order: 2;

  &.hide {
    order: 4;
  }
}
</style>