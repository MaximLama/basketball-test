<template>
  <router-link :to="href" :class="['pagination-link', { active: isActive }]">
    <slot />
  </router-link>
</template>

<script lang="ts">
export default {
  name: "BasePaginationLink",
};

interface BasePaginationLinkProps {
  href: RouteLocationRaw;
  page: number;
}
</script>

<script lang="ts" setup>
import { computed, toRefs } from "vue";
import { useRoute } from "vue-router";
import type { RouteLocationRaw } from "vue-router";

const props = defineProps<BasePaginationLinkProps>();
const route = useRoute();
const { href, page } = toRefs(props);

const routePage = computed(() => {
  return (route.query.page === null || route.query.page === undefined
    ? 1
    : route.query.page) as unknown as number;
});
const isActive = computed(() => {
  return routePage.value == page.value;
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.pagination-link {
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

  &.active {
    background-color: $red;
    color: $white;
  }
}
</style>
