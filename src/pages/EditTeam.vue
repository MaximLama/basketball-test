<template>
  <div class="container">
    <div class="block">
      <div class="breadcrumbs__wrapper">
        <BaseBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <TeamForm :team="team" :submit="onSubmit" :error="onError" ref="form" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EditTeam"
};
</script>

<script lang="ts" setup>
import TeamForm from "@/components/Forms/TeamForm.vue";
import BaseBreadcrumbs from "@/components/Blocks/BaseBreadcrumbs.vue";
import type BreadCrumbsProps from "@/interfaces/BreadcrumbsProps";
import { onMounted, ref } from "vue";
import { RouteNamesEnum } from "@/router/router.types";
import type Team from "@/api/dto/teams/Team";
import { getTeam } from "@/api/teams/getTeam";
import { useRoute } from "vue-router";
import type TeamRequest from "@/api/dto/teams/TeamRequest";
import type { AxiosError } from "axios";
import { editTeam } from "@/api/teams/editTeam";

const breadcrumbs = ref<BreadCrumbsProps[]>([
  {
    text: "Teams",
    href: {
      name: RouteNamesEnum.teams
    }
  },
  {
    text: "Edit team"
  }
])

const team = ref<Team>();
const route = useRoute();
const form = ref<typeof TeamForm>();

onMounted(async () => {
  const id = parseInt(route.params.id as string);
  team.value = await getTeam(id);
})

const onSubmit = async (values: TeamRequest) => {
  if (team.value) {
    await editTeam({ ...values, id: team.value.id })
  }
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