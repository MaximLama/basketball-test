<template>
  <div class="breadcrumbs">
    <template v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.text">
      <component :is="breadcrumb.href !== undefined ? 'router-link' : 'span'" :to="breadcrumb.href"
        class="breadcrumb__item">
        {{ breadcrumb.text }}
      </component>
      <span v-if="index < breadcrumbs.length - 1" class="breadcrumb__gap"> / </span>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: "Breadcrumbs"
}
</script>

<script lang="ts" setup>
import type BreadCrumbsProps from '@/interfaces/BreadcrumbsProps';
import { toRef } from 'vue';

const props = defineProps<{
  breadcrumbs: BreadCrumbsProps[]
}>();

const breadcrumbs = toRef(() => props.breadcrumbs);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.breadcrumb__item,
.breadcrumb__gap {
  color: $red;
}
</style>