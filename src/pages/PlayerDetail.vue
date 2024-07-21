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
import { useRoute, useRouter } from "vue-router";
import type PlayerDetail from "@/api/dto/players/PlayerDetail";
import { usePlayerStore } from "@/stores/players";
import Error404 from "@/errors/error404";
import { RouteNamesEnum } from "@/router/router.types";

const route = useRoute();
const router = useRouter();

const player = ref<PlayerDetail | null>();
const playerStore = usePlayerStore();

const getPlayer = async () => {
  const id = parseInt(route.params.id as string);
  try {
    player.value = await playerStore.getPlayer(id);
  }
  catch (e) {
    if (e instanceof Error404) {
      router.push({ name: RouteNamesEnum.error404 })
    }
  }
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