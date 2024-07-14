<template>
  <div class="pagination">

    <button class="pagination__button" @click.prevent="prev">
      <PaginationLeftArrow />
    </button>

    <BasePaginationLink :href="{ query: { page: 1 } }" :page="1">1</BasePaginationLink>

    <span v-if="premiddle > 2" class="pagination__gap">...</span>

    <BasePaginationLink v-if="total > 2 && premiddle > 1" :href="{ query: { page: premiddle } }" :page="premiddle">
      {{ premiddle }}
    </BasePaginationLink>

    <BasePaginationLink v-if="total > 3" :href="{ query: { page: middle } }" :page="middle">
      {{ middle }}
    </BasePaginationLink>

    <BasePaginationLink v-if="total > 3 && postmiddle < total" :href="{ query: { page: postmiddle } }"
      :page="postmiddle">
      {{ postmiddle }}
    </BasePaginationLink>

    <span v-if="postmiddle + 1 < total" class="pagination__gap">...</span>

    <BasePaginationLink v-if="total > 1" :href="{ query: { page: total } }" :page="total">
      {{ total }}
    </BasePaginationLink>

    <button class="pagination__button" @click.prevent="next">
      <PaginationRightArrow />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "BasePagination",
};
</script>

<script lang="ts" setup>
import BasePaginationLink from "@/components/Links/BasePaginationLink.vue";
import PaginationLeftArrow from "@/components/Icons/PaginationLeftArrow.vue";
import PaginationRightArrow from "@/components/Icons/PaginationRightArrow.vue";
import useBasePagination from "@/composables/pagination/basePagination";

const { premiddle, middle, postmiddle, total, prev, next } = useBasePagination();

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.pagination {
  display: flex;
  gap: $pagination-gap;
  grid-area: pagination;

  @media (max-width: 768px) {
    gap: $pagination-gap-768;
  }

  &__gap,
  &__button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    width: $pagination-item-size;
    height: $pagination-item-size;

    @media (max-width: 768px) {
      width: $pagination-item-size-768;
      height: $pagination-item-size-768;
    }
  }

  &__button {
    cursor: pointer;
  }
}
</style>
