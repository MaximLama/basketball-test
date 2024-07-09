<template>
  <TeamCard v-for="(team, index) in teams" :key="index" :team="team" />
</template>

<script lang="ts" setup>
import TeamCard from "@/components/Cards/TeamCard.vue";
import type ITeamCardProps from "@/interfaces/ITeamCardProps";
import PortlandImg from "@/assets/img/teams/POR 1.png";
import DenverImg from "@/assets/img/teams/DEN.png";
import { ref } from "vue";

const teams = ref<ITeamCardProps[]>([
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

defineProps<{
  setSelectOptions: (options: string[]) => void
}>();
</script>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Teams",
};
</script>