<template>
  <TeamCard v-for="team in teams" :key="team.id" :team="team" />
</template>

<script lang="ts" setup>
import TeamCard from "@/components/Cards/TeamCard.vue";
import useTeams from "@/composables/teams/teams";

const teams = useTeams();

</script>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Teams",
};
</script>