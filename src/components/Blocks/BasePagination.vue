<template>
  <div class="pagination">

    <button class="pagination__button" @click.prevent="prev">
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.4 0.768457C5.712 1.08046 5.712 1.58446 5.4 1.89646L2.296 5.00046L5.4 8.10446C5.712 8.41646 5.712 8.92046 5.4 9.23246C5.088 9.54446 4.584 9.54446 4.272 9.23246L0.600003 5.56046C0.288002 5.24846 0.288002 4.74446 0.600003 4.43246L4.272 0.760457C4.576 0.456457 5.088 0.456457 5.4 0.768457Z"
          fill="#707070" />
      </svg>
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
      <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.599997 0.768457C0.287997 1.08046 0.287997 1.58446 0.599997 1.89646L3.704 5.00046L0.599997 8.10446C0.287997 8.41646 0.287997 8.92046 0.599997 9.23246C0.911997 9.54446 1.416 9.54446 1.728 9.23246L5.4 5.56046C5.712 5.24846 5.712 4.74446 5.4 4.43246L1.728 0.760457C1.424 0.456457 0.911997 0.456457 0.599997 0.768457Z"
          fill="#707070" />
      </svg>
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
import router from "@/router";
import { computed, toRef } from "vue";
import { useRoute } from "vue-router";

const props = defineProps<BasePaginationProps>();

const total = toRef(() => props.total);

const route = useRoute();
console.log(route.query.page);
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
.pagination {
  display: flex;
  gap: 1rem;
  grid-area: pagination;

  &__gap,
  &__button {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    border-radius: 0.25rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  &__button {
    cursor: pointer;
  }
}
</style>
