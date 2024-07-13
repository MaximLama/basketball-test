<template>
  <div class="container">
    <div class="card-grid">
      <div class="search">
        <SearchInput />
      </div>
      <div class="select__wrapper" v-if="isSelectActive">
        <BaseSelect :options="selectOptions" :multiple="true" />
      </div>
      <div class="add-btn__wrapper">
        <AddButton :to="addButtonTo" />
      </div>
      <div class="subgrid">
        <router-view v-slot="{ Component }">
          <component :is="Component" :setSelectOptions="setSelectOptions"></component>
        </router-view>
      </div>
      <BasePagination :total="27" />
      <PaginationSelect :options="paginationOptions" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppLayoutContent"
}
</script>

<script lang="ts" setup>
import SearchInput from '@/components/Inputs/SearchInput.vue';
import AddButton from '@/components/Buttons/AddButton.vue';
import BasePagination from '@/components/Blocks/BasePagination.vue';
import PaginationSelect from '@/components/Inputs/PaginationSelect.vue';
import BaseSelect from '@/components/Inputs/BaseSelect.vue';
import { computed, ref } from 'vue';
import { useRoute, type RouteLocationAsRelativeGeneric } from 'vue-router';

const route = useRoute();

const paginationOptions = ref([6, 12, 24]);
const selectOptions = ref<string[]>([]);

const isSelectActive = computed<boolean>(() => {
  return route.meta.showSelect === true;
})

const setSelectOptions = (options: string[]) => {
  selectOptions.value = options;
}

const addButtonTo = computed(() => {
  return route.meta.addButtonTo as RouteLocationAsRelativeGeneric;
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.container {
  display: flex;
  padding: $container-p;

  @media (max-width: 1050px) {
    padding: $container-p-1050;
  }
}

.card-grid {
  display: grid;
  width: 100%;
  grid-template: $grid-template;
  row-gap: $grid-row-gap;
  column-gap: 1.25vw;

  @media (max-width: 875px) {
    grid-template: $grid-template-875;
    row-gap: $grid-row-gap-875;
  }
}

.subgrid {
  display: grid;
  grid-area: subgrid;
  grid-template-columns: $subgrid-columns;
  grid-gap: 1.25vw;

  @media (max-width: 768px) {
    grid-template-columns: $subgrid-columns-768;
  }
}

.search {
  display: flex;
  grid-area: search_input;
  align-self: start;
}

.select__wrapper {
  display: flex;
  grid-area: select;
  align-self: start;
}

.add-btn__wrapper {
  display: flex;
  grid-area: add_button;
  align-self: start;
  justify-self: end;
  flex-grow: 1;

  @media (max-width: 875px) {
    justify-self: unset;
  }
}

@media (max-width: 875px) {

  .search,
  .select__wrapper,
  .add-btn__wrapper,
  .subgrid {
    margin-bottom: $grid-mb-875;
  }
}
</style>