<template>
  <div class="container">
    <div class="card-grid">
      <div class="search">
        <SearchInput />
      </div>
      <div class="select__wrapper" v-if="isSelectActive">
        <BaseSelect :options="selectOptions" :multiple="true" />
      </div>
      <div class="add-btn">
        <AddButton />
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
import { useRoute } from 'vue-router';

const route = useRoute();

const paginationOptions = ref([6, 12, 24]);
const selectOptions = ref([
  "Forward",
  "Centralforward",
  "Guard"
]);

const isSelectActive = computed<boolean>(() => {
  return route.meta.showSelect === true;
})

const setSelectOptions = (options: string[]) => {
  selectOptions.value = options;
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.container {
  display: flex;
  padding: 2rem 5rem;
}

.card-grid {
  display: grid;
  width: 100%;
  grid-template:
    'search_input select      add_button' min-content
    'subgrid      subgrid     subgrid' min-content
    'pagination   pagination  pagination_select' min-content
    / 1fr 1fr 1fr;
  row-gap: 2rem;
  column-gap: 1.25vw;
}

.subgrid {
  display: grid;
  grid-area: subgrid;
  grid-template-columns: repeat(auto-fit, minmax($min-team-card-w, 1fr));
  grid-gap: 1.25vw;
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

.add-btn {
  grid-area: add_button;
  align-self: start;
  justify-self: end;
}
</style>