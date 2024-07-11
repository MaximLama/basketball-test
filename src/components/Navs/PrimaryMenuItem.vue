<template>
  <router-link :to="href" class="nav-item" :class="{ 'active': isChildRoute }">
    <component class="nav-item__icon" :is="svg" />
    <span class="nav-item__text">{{ name }}</span>
  </router-link>
</template>

<script lang="ts" setup>
import { RouterLink, useRoute, useRouter, type RouteLocationNormalizedLoadedGeneric, type RouteRecord, type RouteRecordRaw } from "vue-router";
import { computed, toRefs } from "vue";
import type IPrimaryMenuItemProps from "@/interfaces/IPrimaryMenuItemProps";

const props = defineProps<IPrimaryMenuItemProps>();

const route = useRoute();
const router = useRouter();

const { svg, href, name, baseRoute } = toRefs(props);

const hasChild = (parentRoute: RouteRecord | RouteRecordRaw, childRoute: RouteLocationNormalizedLoadedGeneric) => {
  if (!parentRoute.children) return false;
  if (parentRoute.children.length === 0) return false;
  let isChild = parentRoute.children.some(child => child.name === route.name);
  if (isChild) return isChild;
  parentRoute.children.forEach((item) => {
    if (hasChild(item, childRoute)) {
      isChild = true;
    }
  });
  return isChild;
}

const isChildRoute = computed(() => {
  const parentRoute = router.getRoutes().find(r => r.name === baseRoute.value.name);
  if (!parentRoute) return false;
  return hasChild(parentRoute, route);
});
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
