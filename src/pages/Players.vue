<template>
  <PlayerCard v-for="(player, index) in players" :key="index" :player="player" />
</template>

<script lang="ts">
export default {
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
  "Guard"
];

onMounted(() => props.setSelectOptions(selectOptions))
</script>