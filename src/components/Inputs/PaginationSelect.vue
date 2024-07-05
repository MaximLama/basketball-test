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
import { toRef, ref } from 'vue';

const props = defineProps<{
  options?: number[]
}>();

const options = toRef(() => props.options);
const selected = ref(options.value?.length ? options.value[0] : '');

const select = (value: number) => {
  selected.value = value;
  active.value = false;
}

const active = ref(false);

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.pagination-select {
  grid-area: pagination_select;
  justify-self: end;
  position: relative;
}

.selected {

  &__wrapper {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    width: 5.5rem;
    height: 2.5rem;
    border: 0.5px solid $lightest-grey;
    border-radius: 0.25rem;
    color: $dark-grey;
    padding: 6px;
    cursor: pointer;
  }

  &__text {
    margin-left: 0.75rem;
  }

  &__icon {
    flex-shrink: 0;
    height: 1.5rem;
    width: 1.5rem;
    fill: $light-grey;

    &-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;

      &::before {
        position: relative;
        left: -6px;
        display: block;
        content: '';
        width: 0.5px;
        height: 1.5rem;
        background-color: $light-grey;
      }
    }
  }
}

.option {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 5.5rem;
  height: 2.5rem;
  border: 0.5px solid $lightest-grey;
  color: $light-grey;
  padding: 6px;
  cursor: pointer;

  &__text {
    margin-left: 0.75rem;
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