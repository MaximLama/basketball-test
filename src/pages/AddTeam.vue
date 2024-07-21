<template>
  <div class="container">
    <div class="block">
      <div class="breadcrumbs__wrapper">
        <BaseBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <TeamForm :submit="onSubmit" :error="onError" ref="form" />
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
import type TeamRequest from "@/api/dto/teams/TeamRequest";
import { type AxiosError } from "axios";
import { useTeamStore } from "@/stores/teams";

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

const teamStore = useTeamStore();

const form = ref<typeof TeamForm>();

const onSubmit = async (values: TeamRequest) => {
  await teamStore.addTeam(values);
}

const onError = (e: AxiosError) => {
  if (e.response?.status === 409) {
    form.value?.setFieldError('name', 'Given name already exists')
  }
}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form-page";
@include base-form-page;
</style>