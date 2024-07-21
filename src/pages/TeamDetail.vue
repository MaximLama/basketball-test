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
import { useRoute } from "vue-router";
import type Team from "@/api/dto/teams/Team";
import type Player from "@/api/dto/players/Player";
import { useTeamStore } from "@/stores/teams";

const route = useRoute();

const team = ref<Team | null>();
const players = ref<Player[]>([]);

const teamStore = useTeamStore();

const getTeam = async () => {
  const id = parseInt(route.params.id as string);
  const teamInfo = await teamStore.getTeam(id);
  team.value = teamInfo;
  players.value = teamInfo.players || [];
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