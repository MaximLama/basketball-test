<template>
  <router-link :to="href" :class="'nav-item'" :active-class="'active'">
    <component class="nav-item__icon" :is="svg" />
    <span class="nav-item__text">{{ name }}</span>
  </router-link>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { toRefs } from "vue";
import type IPrimaryMenuItemProps from "@/interfaces/IPrimaryMenuItemProps";

const props = defineProps<IPrimaryMenuItemProps>();

const { svg, href, name } = toRefs(props);
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
  gap: 0.125rem;
  align-items: center;
  cursor: pointer;

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
