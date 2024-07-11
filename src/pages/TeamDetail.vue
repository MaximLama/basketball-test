<template>
  <div class="container">
    <TeamDetailCard v-bind="team" />
    <TeamComposition :teammates="teammates" />
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
import { reactive, ref } from "vue";
import type { Ref } from "vue";
import type ITeamDetailProps from '@/interfaces/ITeamDetailProps';
import DenverImg from "@/assets/img/teams/DEN.png";
import BolBolImg from "@/assets/img/players/bol-bol.png";
import type IPlayerProps from "@/interfaces/IPlayerProps";

const team: ITeamDetailProps = reactive({
  name: "Denver Nuggets",
  img: DenverImg,
  year: 1976,
  division: "Northwestern",
  conference: "Western"
});

const teammates: Ref<IPlayerProps[]> = ref(
  [
    {
      name: "Bol Bol",
      position: "Centerforward",
      image: BolBolImg,
      number: 10,
      height: 218,
      weight: 100,
      age: 21
    },
    {
      name: "Bol Bol",
      position: "Centerforward",
      image: BolBolImg,
      number: 10,
      height: 218,
      weight: 100,
      age: 21
    },
    {
      name: "Bol Bol",
      position: "Centerforward",
      image: BolBolImg,
      number: 10,
      height: 218,
      weight: 100,
      age: 21
    },
    {
      name: "Bol Bol",
      position: "Centerforward",
      image: BolBolImg,
      number: 10,
      height: 218,
      weight: 100,
      age: 21
    },
    {
      name: "Bol Bol",
      position: "Centerforward",
      image: BolBolImg,
      number: 10,
      height: 218,
      weight: 100,
      age: 21
    }
  ]
);
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
  gap: 2rem;
  padding: $container-p;

  @media (max-width) {
    padding: $container-p-1050;
  }
}
</style>