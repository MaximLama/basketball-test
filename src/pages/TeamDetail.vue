<template>
  <div class="container">
    <TeamDetailCard v-if="team" :team="team" />
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
import { onMounted, ref, type Ref } from "vue";
import BolBolImg from "@/assets/img/players/bol-bol.png";
import type IPlayerProps from "@/interfaces/IPlayerProps";
import { getTeam as getTeamRequest } from "@/api/teams/getTeam";
import { useRoute } from "vue-router";
import type Team from "@/api/dto/teams/Team";

/*const team: ITeamDetailProps = reactive({
  name: "Denver Nuggets",
  img: DenverImg,
  year: 1976,
  division: "Northwestern",
  conference: "Western"
});*/

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

const route = useRoute();

const team = ref<Team | null>();

const getTeam = async () => {
  const id = parseInt(route.params.id as string);
  team.value = await getTeamRequest(id);
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