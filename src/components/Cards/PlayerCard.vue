<template>
  <router-link :to="{ name: RouteNamesEnum.player, params: { id } }" class="card">
    <div class="card__top">
      <img v-if="avatarUrl" :src="useImage(avatarUrl)" class="card__image" />
    </div>
    <div class="card__bottom">
      <div class="card__text-box">
        <span class="card__title">{{ name }} <span class="light-red">{{ number ? "#" + number : "-" }}</span></span>
        <span class="card__subtitle">{{ team?.name }}</span>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
export default {
  name: "PlayerCard",
};
</script>

<script lang="ts" setup>
import type Player from "@/api/dto/players/Player";
import { toRef, toRefs } from "vue";
import { RouteNamesEnum } from "@/router/router.types";
import type Team from "@/api/dto/teams/Team";
import useImage from "@/composables/helpers/image";

const props = defineProps<{
  player: Player;
  team?: Team;
}>();

const { id, name, number, avatarUrl } = toRefs(props.player);
const team = toRef(() => props.team);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.card {
  display: flex;
  flex-grow: 1;
  min-width: $min-team-card-w;
  flex-direction: column;

  @media (max-width: 768px) {
    min-width: 0;
  }

  &__top {
    height: 26.93vw;
    max-height: 17.5rem;
    background: $card-gradient;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: flex;
    align-items: end;
    justify-content: center;
  }

  &__image {
    width: 33vw;
    max-width: 17.13rem;
    max-height: 13rem;
    flex-shrink: 0;
    object-fit: contain;
  }

  &__bottom {
    height: 6.25rem;
    background: $dark-grey;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  &__title {
    color: $white;
    font-size: 1.125rem;
    line-height: 1.54rem;
    text-align: center;
  }
}
</style>
