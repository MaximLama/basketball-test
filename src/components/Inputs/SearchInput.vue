<template>
  <div class="search__wrapper">
    <input type="text" :value="value" @change="onChange" class="search" placeholder="Search..." />
    <span class="search__button"></span>
  </div>
</template>

<script lang="ts">
export default {
  name: "SearchInput",
};
</script>

<script lang="ts" setup>
import useSearchInput from '@/composables/search/searchInput';

const props = defineProps<{
  value: string
}>()

const emit = defineEmits<{
  change: [value: string]
}>()

const { value, onChange } = useSearchInput(props, emit);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.search {
  width: 100%;
  height: 2.5rem;
  border: 0.5px solid $lightest-grey;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  padding-right: 2.5rem;

  &__wrapper {
    display: inline-flex;
    flex-grow: 1;
    flex-shrink: 1;
    width: $max-input-w;
    position: relative;
  }

  &__button {
    background: url("@/assets/img/icons/search.svg") 0 0 no-repeat;
    display: block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
