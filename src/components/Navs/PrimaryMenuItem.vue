<template>
  <router-link :to="href" class="nav-item" :class="{ 'active': isChildRoute }">
    <component class="nav-item__icon" :is="svg" />
    <span class="nav-item__text">{{ name }}</span>
  </router-link>
</template>

<script lang="ts" setup>
import type PrimaryMenuItemProps from "@/interfaces/PrimaryMenuItemProps";
import usePrimaryMenuItem from "@/composables/menu/primaryMenuItem";

const props = defineProps<PrimaryMenuItemProps>();
const { svg, href, name, isChildRoute } = usePrimaryMenuItem(props);
</script>

<script lang="ts">
export default {
  name: "PrimaryMenuItem",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.nav-item {
  display: flex;
  flex-direction: column;
  gap: $item-menu-gap;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1050px) {
    flex-direction: row;
    gap: $item-menu-gap-1050;
  }

  &__icon {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
  }

  &__text {
    font-size: 0.75rem;
    color: $light-grey;
    line-height: 1.125rem;
  }
}

.active {
  :deep(svg path) {
    fill: $red;
  }

  .nav-item__text {
    color: $red;
  }
}
</style>
