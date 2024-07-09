<template>
  <PlayerCard v-for="(player, index) in players" :key="index" :player="player" />
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Players",
};
</script>

<script lang="ts" setup>
import PlayerCard from "@/components/Cards/PlayerCard.vue";
import type IPlayerCardProps from "@/interfaces/IPlayerCardProps";
import JaylenAdamsImg from "@/assets/img/players/jaylenadams.png";
import { onMounted, ref } from "vue";

const players = ref<IPlayerCardProps[]>([
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

const props = defineProps<{
  setSelectOptions: (options: string[]) => void
}>();

const selectOptions = [
  "Forward",
  "Centralforward",
  "Guard",
  "AAAAAAAAA",
  "BBBBBBBBB",
  "CCCCCCCCC",
  "DDDDDDDDD",
  "EEEEEEEEE"
];

onMounted(() => props.setSelectOptions(selectOptions))
</script>