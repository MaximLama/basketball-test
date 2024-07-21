<template>
  <div class="select" v-click-outside="() => active = false">
    <div class="selected__wrapper" :class="[selectClass]" @click.prevent="active = !active">
      <div class="selected">
        <span v-show="activePlaceholder">{{ placeholder }}</span>
        <span class="selected__text" v-show="!multiple && selected">{{ selected?.name }}</span>
        <SelectTags :tags="tags" v-show="multiple && tags.length" @remove="removeTag" />
      </div>
      <div class="clear" v-show="activeClear" @click.prevent.stop="clear">
        <ClearIcon />
      </div>
      <div class="icon">
        <SelectArrow />
      </div>
    </div>
    <div class="items" :class="{ 'active': active }">
      <div class="item" v-for="option in selectOptions" :key="option.value" @click.prevent="select(option)"
        :class="{ active: indexOfTag(option) !== -1 }">{{
          option.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseSelect"
}
</script>

<script lang="ts" setup>
import SelectArrow from '@/components/Icons/SelectArrow.vue';
import ClearIcon from '@/components/Icons/ClearIcon.vue';
import SelectTags from '@/components/Blocks/SelectTags.vue';
import type BaseSelectProps from '@/interfaces/BaseSelectProps';
import useBaseSelect from '@/composables/inputs/baseSelect';

const props = withDefaults(defineProps<BaseSelectProps>(), {
  multiple: false,
  selectClass: '',
});
const emit = defineEmits<{
  change: [value: string | number | undefined],
  changeMultiple: [value: (string | number)[] | undefined]
}>();

const {
  selectClass,
  placeholder,
  select,
  clear,
  removeTag,
  active,
  activePlaceholder,
  activeClear,
  selected,
  tags,
  selectOptions,
  indexOfTag
} = useBaseSelect(props, emit);

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.select {
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  width: 22.75rem;
  position: relative;
  height: 2.5rem;
  background-color: $white;
  border-radius: 0.25rem;

  &:hover {
    background: $lightest-grey1;
  }
}

.selected {
  display: flex;
  align-items: center;
  flex-grow: 1;

  &__wrapper {
    display: flex;
    flex-grow: 1;
    align-items: center;
    border: 0.5px solid $lightest-grey;
    border-radius: 0.25rem;
    padding-left: 0.75rem;

  }

  &__tags {
    width: 100%;
    display: flex;
    gap: 0.25rem;
    overflow: hidden;
    max-width: 17rem;
  }

  &__tag {
    display: flex;
    height: 1.5rem;
    background: $red;
    border-radius: 0.25rem;
    padding: 0 0.25rem;
    align-items: center;
    gap: 0.5rem;
    color: $white;
    box-sizing: border-box;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      flex-shrink: 0;
      height: 0.75rem;
      width: 0.75rem;
      fill: $white;
    }
  }

  &__text {
    color: $dark-grey;
  }
}

.items {
  display: none;
  position: absolute;
  flex-direction: column;
  width: 100%;
  top: 2.75rem;
  z-index: 1;
}

.active {
  display: flex;
}

.item {
  display: flex;
  align-items: center;
  height: 2.5rem;
  background: $white;
  padding-left: 0.75rem;
  border: 0.5px solid $lightest-grey;

  &:not(:first-of-type) {
    border-top: none;
  }

  &:first-of-type {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  &:last-of-type {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  &:hover,
  &.active {
    color: $white;
    cursor: pointer;
  }

  &:hover {
    background: $red;
  }

  &.active {
    background: $dark-red;
  }
}

.icon {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    height: 1.5rem;
    width: 0.5px;
    background-color: $lightest-grey;
  }
}

.clear {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  cursor: pointer;
}
</style>