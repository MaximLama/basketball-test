<template>
  <div class="container">
    <div class="block">
      <div class="breadcrumbs__wrapper">
        <BaseBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <TeamForm />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AddTeam"
};
</script>

<script lang="ts" setup>
import TeamForm from "@/components/Forms/TeamForm.vue";
import BaseBreadcrumbs from "@/components/Blocks/BaseBreadcrumbs.vue";
import type BreadCrumbsProps from "@/interfaces/BreadcrumbsProps";
import { ref } from "vue";
import { RouteNamesEnum } from "@/router/router.types";

const breadcrumbs = ref<BreadCrumbsProps[]>([
  {
    text: "Teams",
    href: {
      name: RouteNamesEnum.teams
    }
  },
  {
    text: "Add new team"
  }
])
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form-page";
@include base-form-page;
</style>