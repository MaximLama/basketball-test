<template>
  <div class="container">
    <div class="card-grid">
      <div class="search">
        <SearchInput />
      </div>
      <div class="add-btn">
        <AddButton />
      </div>
      <div class="subgrid">
        <PlayerCard v-for="(player, index) in players" :key="index" :player="player" />
      </div>
      <BasePagination :total="27" />
      <PaginationSelect :options="paginationOptions" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Players",
};
</script>

<script lang="ts" setup>
import SearchInput from "@/components/Inputs/SearchInput.vue";
import AddButton from "@/components/Buttons/AddButton.vue";
import PlayerCard from "@/components/Cards/PlayerCard.vue";
import BasePagination from "@/components/Blocks/BasePagination.vue";
import type IPlayerCardProps from "@/interfaces/IPlayerCardProps";
import JaylenAdamsImg from "@/assets/img/players/jaylenadams.png";
import PaginationSelect from "@/components/Inputs/PaginationSelect.vue";
import { ref } from "vue";
import type { Ref } from "vue";

const players: Ref<IPlayerCardProps[]> = ref([
  {
    name: "Jaylen Adams",
    number: 10,
    team: "Portland trail blazers",
    photo: JaylenAdamsImg
  },
  {
    name: "Jaylen Adams",
    number: 10,
    team: "Portland trail blazers",
    photo: JaylenAdamsImg
  },
  {
    name: "Jaylen Adams",
    number: 10,
    team: "Portland trail blazers",
    photo: JaylenAdamsImg
  },
  {
    name: "Jaylen Adams",
    number: 10,
    team: "Portland trail blazers",
    photo: JaylenAdamsImg
  },
]);

const paginationOptions = ref([6, 12, 24]);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/grid";
@include grid;
</style>