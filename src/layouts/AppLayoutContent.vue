<template>
  <div class="container-grid">
    <div class="card-grid">
      <div class="search">
        <SearchInput :value="searchName" @change="setSearchName" />
      </div>
      <div class="select__wrapper" v-if="isSelectActive">
        <BaseSelect :options="selectOptions" :multiple="true" @changeMultiple="onChange" />
      </div>
      <div class="add-btn__wrapper">
        <AddButton :to="addButtonTo" />
      </div>
      <router-view v-slot="{ Component }">
        <component :is="Component" :params="{ pageSize, page: currentPage, name: searchName, teamIds: selectValues }">
        </component>
      </router-view>
      <BasePagination :total="pageCount" :currentPage="currentPage" />
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
import { computed } from 'vue';
import { useRoute, type RouteLocationAsRelativeGeneric } from 'vue-router';
import usePagination from '@/composables/pagination/pagination';
import useSearch from '@/composables/search/search';
import useTeamsSelect from '@/composables/players/teamsSelect';

const { paginationOptions, pageSize, currentPage, pageCount } = usePagination();

const { searchName, setSearchName } = useSearch();

const { isSelectActive, selectOptions, onChange, selectValues } = useTeamsSelect();

const route = useRoute();
const addButtonTo = computed(() => {
  return route.meta.addButtonTo as RouteLocationAsRelativeGeneric;
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.container-grid {
  display: flex;
  padding: $container-p;

  @media (max-width: 1160px) {
    padding: $container-p-1160;
  }

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

  @media (max-width: 930px) {
    grid-template: $grid-template-930;
    row-gap: $grid-row-gap-930;
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

  @media (max-width: 930px) {
    justify-self: unset;
  }
}

@media (max-width: 1050px) {

  .search,
  .select__wrapper,
  .add-btn__wrapper {
    margin: $grid-items-m-1050;
  }
}

@media (max-width: 930px) {

  .search,
  .select__wrapper,
  .add-btn__wrapper {
    margin-bottom: $grid-mb-930;
  }
}
</style>