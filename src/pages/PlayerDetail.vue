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
import { onMounted, ref } from "vue";
import PlayerDetailCard from "@/components/Cards/PlayerDetailCard.vue";
import { useRoute } from "vue-router";
import type PlayerDetail from "@/api/dto/players/PlayerDetail";
import { usePlayerStore } from "@/stores/players";

const route = useRoute();

const player = ref<PlayerDetail | null>();
const playerStore = usePlayerStore();

const getPlayer = async () => {
  const id = parseInt(route.params.id as string);
  player.value = await playerStore.getPlayer(id);
}

onMounted(async () => {
  await getPlayer()
})
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