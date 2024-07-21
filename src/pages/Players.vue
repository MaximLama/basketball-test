<template>
  <div class="subgrid" v-show="!isEmpty">
    <PlayerCard v-for="(player, index) in players" :key="index" :player="player"
      :team="teams.find(findTeam(player.team as number)) as Team" />
  </div>
  <div class="empty" v-show="isEmpty">
    <img src="@/assets/img/empty_players.svg" alt="" class="empty__img">
    <span class="empty__title">Empty here</span>
    <span class="empty__subtitle">Add new teams to continue</span>
  </div>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Players",
};
</script>

<script lang="ts" setup>
import PlayerCard from "@/components/Cards/PlayerCard.vue"
import type GetPlayersRequest from "@/api/dto/players/GetPlayersRequest";
import usePlayers from "@/composables/players/players";
import type Team from "@/api/dto/teams/Team";

const props = defineProps<{
  params: GetPlayersRequest
}>()

const { isEmpty, players, teams, findTeam } = usePlayers(props);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/cards";
@include cards;
</style>
