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
interface BasePaginationProps {
  total: number;
}

export default {
  name: "BasePagination",
};
</script>

<script lang="ts" setup>
import BasePaginationLink from "@/components/Links/BasePaginationLink.vue";
import PaginationLeftArrow from "@/components/Icons/PaginationLeftArrow.vue";
import PaginationRightArrow from "@/components/Icons/PaginationRightArrow.vue";
import router from "@/router";
import { computed, toRef } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<BasePaginationProps>();

const total = toRef(() => props.total);

const route = useRoute();
const current = computed(() => {
  return route.query.page
    ? parseInt(route.query.page as unknown as string)
    : 1;
});

const premiddle = computed(() => {
  if (current.value <= 3) {
    return 2;
  } else if (current.value >= total.value - 2) {
    return total.value - 3;
  } else {
    return current.value - 1;
  }
});

const middle = computed(() => {
  if (current.value <= 3) {
    return 3;
  } else if (current.value >= total.value - 2) {
    return total.value - 2;
  } else {
    return current.value;
  }
});

const postmiddle = computed(() => {
  if (current.value <= 3) {
    return 4;
  } else if (current.value >= total.value - 2) {
    return total.value - 1;
  } else {
    return current.value + 1;
  }
});

const prev = () => {
  if (current.value > 1) {
    router.push({ query: { page: current.value - 1 } })
  }
}

const next = () => {
  if (current.value < total.value) {
    router.push({ query: { page: current.value + 1 } })
  }
}
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
