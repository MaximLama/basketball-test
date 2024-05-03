<template>
  <router-link :to="href" :class="['pagination-link', { active: isActive }]">
    <slot />
  </router-link>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";
import { RouteLocationRaw, useRoute } from "vue-router";

interface BasePaginationLinkProps {
  href: RouteLocationRaw;
  page: number;
}

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

<script lang="ts">
export default {
  name: "BasePaginationLink",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.pagination-link {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  width: 2.5rem;
  height: 2.5rem;

  &.active {
    background-color: $red;
    color: $white;
  }
}
</style>
