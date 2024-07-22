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
import useTeamDetail from "@/composables/teams/teamDetail";

const { team, players } = useTeamDetail();
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