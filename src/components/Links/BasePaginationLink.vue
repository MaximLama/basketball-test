<template>
  <router-link :to="href" :class="['pagination-link', { active: isActive }]">
    <slot />
  </router-link>
</template>

<script lang="ts">
export default {
  name: "BasePaginationLink",
};
</script>

<script lang="ts" setup>
import useBasePaginationLink from "@/composables/pagination/basePaginationLink";
import type BasePaginationLinkProps from "@/interfaces/BasePaginationLinkProps";

const props = defineProps<BasePaginationLinkProps>();
const { href, isActive } = useBasePaginationLink(props);
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
