<template>
  <div class="container">
    <PlayerDetailCard v-bind="player" />
  </div>
</template>

<script lang="ts">
export default {
  name: "TeamDetail"
}
</script>

<script lang="ts" setup>
import { reactive } from "vue";
import type IPlayerDetailProps from "@/interfaces/IPlayerDetailProps";
import JaylenAdamsImg from "@/assets/img/players/jaylenadams.png";
import PlayerDetailCard from "@/components/Cards/PlayerDetailCard.vue";

const player: IPlayerDetailProps = reactive({
  name: "Greg Whittington",
  position: "Forward",
  image: JaylenAdamsImg,
  number: 22,
  height: 206,
  weight: 95,
  age: 27,
  team: "Denver Nuggets"
});
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem 5rem;
  flex-direction: column;
}
</style>