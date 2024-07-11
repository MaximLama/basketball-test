<template>
  <div class="container">
    <div class="block">
      <div class="breadcrumbs__wrapper">
        <BaseBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <PlayerForm />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AddPlayer"
};
</script>

<script lang="ts" setup>
import PlayerForm from "@/components/Forms/PlayerForm.vue";
import BaseBreadcrumbs from "@/components/Blocks/BaseBreadcrumbs.vue";
import type BreadCrumbsProps from "@/interfaces/BreadcrumbsProps";
import { ref } from "vue";
import { RouteNamesEnum } from "@/router/router.types";

const breadcrumbs = ref<BreadCrumbsProps[]>([
  {
    text: "Players",
    href: {
      name: RouteNamesEnum.players
    }
  },
  {
    text: "Add new player"
  }
])
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form-page";
@include base-form-page;
</style>