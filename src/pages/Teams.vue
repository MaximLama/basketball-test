<template>
  <div class="container">
    <div class="row">
      <SearchInput />
      <AddButton />
    </div>
    <div class="row card-grid">
      <TeamCard v-for="(team, index) in teams" :key="index" :team="team" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchInput from "@/components/Inputs/SearchInput.vue";
import AddButton from "@/components/Buttons/AddButton.vue";
import TeamCard from "@/components/Cards/TeamCard.vue";
import ITeamCardProps from "@/interfaces/ITeamCardProps";

const teams: ITeamCardProps[] = [
  {
    name: "Portland trail blazers",
    year: 1970,
    image: require("@/assets/img/POR 1.png"),
  },
  {
    name: "Denver Nuggets",
    year: 1976,
    image: require("@/assets/img/DEN.png"),
  },
];
</script>

<script lang="ts">
export default {
  name: "Teams",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
}

.card-grid {
  gap: 1.67vw;
  flex-wrap: wrap;
}
</style>
