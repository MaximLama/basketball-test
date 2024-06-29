<template>
  <div class="container">
    <div class="card-grid">
      <SearchInput />
      <AddButton />
      <div class="teams">
        <TeamCard v-for="(team, index) in teams" :key="index" :team="team" />
      </div>
      <BasePagination :total="27" />
      <PaginationSelect :options="paginationOptions" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SearchInput from "@/components/Inputs/SearchInput.vue";
import AddButton from "@/components/Buttons/AddButton.vue";
import TeamCard from "@/components/Cards/TeamCard.vue";
import BasePagination from "@/components/Blocks/BasePagination.vue";
import type ITeamCardProps from "@/interfaces/ITeamCardProps";
import PortlandImg from "@/assets/img/POR 1.png";
import DenverImg from "@/assets/img/DEN.png";
import PaginationSelect from "@/components/Inputs/PaginationSelect.vue";
import { ref } from "vue";
import type { Ref } from "vue";

const teams: Ref<ITeamCardProps[]> = ref([
  {
    name: "Portland trail blazers",
    year: 1970,
    image: PortlandImg,
  },
  {
    name: "Denver Nuggets",
    year: 1976,
    image: DenverImg,
  },
  {
    name: "Portland trail blazers",
    year: 1970,
    image: PortlandImg,
  },
  {
    name: "Portland trail blazers",
    year: 1970,
    image: PortlandImg,
  },
  {
    name: "Portland trail blazers",
    year: 1970,
    image: PortlandImg,
  },
  /*{
    name: "Portland trail blazers",
    year: 1970,
    image: PortlandImg,
  },*/
]);

const paginationOptions = ref([6, 12, 24]);
</script>

<script lang="ts">
export default {
  name: "Teams",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.container {
  display: flex;
  margin: 2rem 5rem;
}

.card-grid {
  display: grid;
  width: 100%;
  grid-template:
    "search_input .          add_button"
    "teams        teams      teams"
    "pagination   pagination select"
    / 1fr 1fr 1fr;
  grid-row-gap: 2rem;
}

.teams {
  display: grid;
  grid-area: teams;
  grid-template-columns: repeat(auto-fit, minmax($min-team-card-w, 1fr));
  grid-gap: 1.67vw;
}
</style>
