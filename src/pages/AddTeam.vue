<template>
  <div class="container">
    <div class="block">
      <div class="breadcrumbs__wrapper">
        <Breadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <AddTeamForm />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AddTeam"
};
</script>

<script lang="ts" setup>
import AddTeamForm from "@/components/Forms/AddTeamForm.vue";
import Breadcrumbs from "@/components/Blocks/Breadcrumbs.vue";
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

.container {
  padding: 2rem 5rem;
  flex-direction: column;
}

.block {
  display: flex;
  flex-direction: column;
  background: $white;
  border-radius: 0.625rem;
}

.breadcrumbs__wrapper {
  padding: 1.5rem 2rem;
}
</style>