<template>
  <div class="container">
    <PlayerDetailCard v-if="player" :player="player" />
  </div>
</template>

<script lang="ts">
export default {
  name: "TeamDetail"
}
</script>

<script lang="ts" setup>
import PlayerDetailCard from "@/components/Cards/PlayerDetailCard.vue";
import usePlayerDetail from "@/composables/players/playerDetail";

const player = usePlayerDetail();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.container {
  padding: $container-p;
  flex-direction: column;

  @media (max-width: 1050px) {
    padding: $container-p-1050;
  }
}
</style>