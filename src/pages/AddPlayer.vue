<template>
  <div class="container">
    <div class="block">
      <div class="breadcrumbs__wrapper">
        <BaseBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <PlayerForm :submit="onSubmit" :error="onError" :positions="positions" :teams="teams" ref="form" />
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
import { onMounted, ref } from "vue";
import { RouteNamesEnum } from "@/router/router.types";
import type PlayerRequest from "@/api/dto/players/PlayerRequest";
import type { AxiosError } from "axios";
import type Team from "@/api/dto/teams/Team";
import { getTeams } from "@/api/teams/getTeams";
import { usePlayerStore } from "@/stores/players";

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

const form = ref<typeof PlayerForm>();
const playerStore = usePlayerStore();

const onSubmit = async (values: PlayerRequest) => {
  await playerStore.addPlayer(values);
}

const onError = (e: AxiosError) => {
  if (e.response?.status === 409) {
    form.value?.setFieldError('name', 'Given name already exists')
  }
}

const positions = ref<string[]>([]);
const teams = ref<Team[]>([]);

onMounted(async () => {
  positions.value = await playerStore.getPositions();
  teams.value = (await getTeams()).data;
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form-page";
@include base-form-page;
</style>