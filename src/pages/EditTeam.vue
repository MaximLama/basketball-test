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
import { useRoute, useRouter } from "vue-router";
import type TeamRequest from "@/api/dto/teams/TeamRequest";
import type { AxiosError } from "axios";
import { useTeamStore } from "@/stores/teams";
import Error404 from "@/errors/error404";

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
const router = useRouter();
const form = ref<typeof TeamForm>();
const teamStore = useTeamStore();

onMounted(async () => {
  const id = parseInt(route.params.id as string);
  try {
    team.value = await teamStore.getTeam(id);
  }
  catch (e) {
    if (e instanceof Error404) {
      router.push({ name: RouteNamesEnum.error404 })
    }
  }
})

const onSubmit = async (values: TeamRequest) => {
  if (team.value) {
    await teamStore.editTeam({ ...values, id: team.value.id })
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