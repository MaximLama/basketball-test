<template>
  <div class="container">
    <TeamDetailCard v-if="team" :team="team" />
    <TeamComposition :players="players" />
  </div>
</template>

<script lang="ts">
export default {
  name: "TeamDetail"
}
</script>

<script lang="ts" setup>
import TeamDetailCard from "@/components/Cards/TeamDetailCard.vue";
import TeamComposition from "@/components/Blocks/TeamComposition.vue";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import type Team from "@/api/dto/teams/Team";
import type Player from "@/api/dto/players/Player";
import { useTeamStore } from "@/stores/teams";
import Error404 from "@/errors/error404";
import { RouteNamesEnum } from "@/router/router.types";

const route = useRoute();
const router = useRouter();

const team = ref<Team | null>();
const players = ref<Player[]>([]);

const teamStore = useTeamStore();

const getTeam = async () => {
  const id = parseInt(route.params.id as string);
  let teamInfo;
  try {
    teamInfo = await teamStore.getTeam(id);
    team.value = teamInfo;
    players.value = teamInfo.players || [];
  }
  catch (e) {
    if (e instanceof Error404) {
      router.push({ name: RouteNamesEnum.error404 })
    }
  }
}

onMounted(async () => {
  await getTeam()
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.container {
  flex-direction: column;
  gap: 2rem;
  padding: $container-p;

  @media (max-width) {
    padding: $container-p-1050;
  }
}
</style>