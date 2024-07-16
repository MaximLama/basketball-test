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
</script>

<script lang="ts" setup>
import ClearIcon from '@/components/Icons/ClearIcon.vue';
import type TagsProps from '@/interfaces/TagsProps';
import useSelectTags from '@/composables/inputs/selectTags';

const props = withDefaults(defineProps<TagsProps>(), {
  tags: () => new Set() as Set<string>
})

const tags = useSelectTags(props);

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
  width: 17rem;
  flex-grow: 1;
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