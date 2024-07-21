<template>
  <div class="container">
    <div class="block">
      <div class="breadcrumbs__wrapper">
        <BaseBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <PlayerForm :player="player" :submit="onSubmit" :error="onError" :positions="positions" :teams="teams"
        ref="form" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EditPlayer"
};
</script>

<script lang="ts" setup>
import PlayerForm from "@/components/Forms/PlayerForm.vue";
import BaseBreadcrumbs from "@/components/Blocks/BaseBreadcrumbs.vue";
import type BreadCrumbsProps from "@/interfaces/BreadcrumbsProps";
import { onMounted, ref } from "vue";
import { RouteNamesEnum } from "@/router/router.types";
import type Team from "@/api/dto/teams/Team";
import type { AxiosError } from "axios";
import { getTeams } from "@/api/teams/getTeams";
import type PlayerRequest from "@/api/dto/players/PlayerRequest";
import type Player from "@/api/dto/players/Player";
import { useRoute } from "vue-router";
import { usePlayerStore } from "@/stores/players";

const breadcrumbs = ref<BreadCrumbsProps[]>([
  {
    text: "Players",
    href: {
      name: RouteNamesEnum.players
    }
  },
  {
    text: "Edit player"
  }
])

const form = ref<typeof PlayerForm>();

const route = useRoute();
const positions = ref<string[]>([]);
const teams = ref<Team[]>([]);
const player = ref<Player>();
const playerStore = usePlayerStore();

onMounted(async () => {
  const id = parseInt(route.params.id as string);
  player.value = await playerStore.getPlayer(id);
  positions.value = await playerStore.getPositions();
  teams.value = (await getTeams()).data;
})

const onSubmit = async (values: PlayerRequest) => {
  if (player.value) {
    await playerStore.editPlayer({ ...values, id: player.value.id })
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