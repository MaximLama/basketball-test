<template>
  <div class="pagination-select" v-click-outside="() => active = false">
    <div class="selected__wrapper" @click.prevent="active = !active">
      <span class="selected__text">{{ selected }}</span>
      <div class="selected__icon-wrapper">
        <SelectArrow class="selected__icon" />
      </div>
    </div>
    <div class="options" :class="{ active }">
      <div v-for="option in options" :option="option" :key="option" class="option" @click.prevent="select(option)">
        <span class="option__text">{{ option }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PaginationSelect"
}
</script>

<script lang="ts" setup>
import SelectArrow from '@/components/Icons/SelectArrow.vue';
import usePaginationSelect from '@/composables/pagination/paginationSelect';

const props = defineProps<{
  options?: number[]
}>()

const { select, active, selected, options } = usePaginationSelect(props);

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.pagination-select {
  grid-area: pagination_select;
  justify-self: end;
  position: relative;

  @media (max-width: 1050px) {
    margin: $grid-items-m-1050;
  }
}

.selected {

  &__wrapper {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    width: $pagination-select-w;
    height: $pagination-select-h;
    border: 0.5px solid $lightest-grey;
    border-radius: 0.25rem;
    color: $dark-grey;
    padding: 6px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: $pagination-select-w-768;
      height: $pagination-select-h-768;
    }
  }

  &__text {
    margin-left: $pagination-ml;

    @media (max-width: 768px) {
      margin-left: $pagination-ml-768;
    }
  }

  &__icon {
    flex-shrink: 0;
    height: $pagination-select-icon-size;
    width: $pagination-select-icon-size;
    fill: $light-grey;

    @media (max-width: 768px) {
      height: $pagination-select-icon-size-768;
      width: $pagination-select-icon-size-768;
    }

    &-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;

      &::before {
        position: relative;
        left: $pagination-separator-gap;
        display: block;
        content: '';
        width: 0.5px;
        height: 1.5rem;
        background-color: $light-grey;

        @media (max-width: 768px) {
          left: $pagination-separator-gap-768;
        }
      }
    }
  }
}

.option {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: $pagination-select-w;
  height: $pagination-select-h;
  border: 0.5px solid $lightest-grey;
  color: $light-grey;
  padding: 6px;
  background-color: $white;
  cursor: pointer;

  @media (max-width: 768px) {
    width: $pagination-select-w-768;
    height: $pagination-select-h-768;
  }

  &__text {
    margin-left: $pagination-ml;

    @media (max-width: 768px) {
      margin-left: $pagination-ml-768;
    }
  }

  &:first-of-type {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  &:last-of-type {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  &:not(:first-of-type) {
    border-top: none;
  }

  &:hover {
    background-color: $lightest-red;
    color: $white;
  }

  &:active {
    background-color: $dark-red;
    color: $white;
  }
}

.options {
  display: none;
  position: absolute;
  top: 0;
  transform: translateY(calc(-100% - 6px));

  &.active {
    display: block;
  }
}
</style>