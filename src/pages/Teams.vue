<template>
  <div class="subgrid" v-show="!isEmpty">
    <TeamCard v-for="team in teams" :key="team.id" :team="team" />
  </div>
  <div class="empty" v-show="isEmpty">
    <img src="@/assets/img/empty_teams.svg" alt="" class="empty__img">
    <span class="empty__title">Empty here</span>
    <span class="empty__subtitle">Add new teams to continue</span>
  </div>
</template>

<script lang="ts" setup>
import type GetTeamsRequest from "@/api/dto/teams/GetTeamsRequest";
import TeamCard from "@/components/Cards/TeamCard.vue";
import useTeams from "@/composables/teams/teams";

const props = defineProps<{
  params: GetTeamsRequest
}>()

const { teams, isEmpty } = useTeams(props);

</script>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Teams",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/cards";
@include cards;
</style>