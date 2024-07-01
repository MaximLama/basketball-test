<template>
  <div class="card">
    <div class="card__top">
      <img :src="photo" class="card__image" />
    </div>
    <div class="card__bottom">
      <div class="card__text-box">
        <span class="card__title">{{ name }} <span class="card__number">#{{ number }}</span></span>
        <span class="card__subtitle">{{ team }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PlayerCard",
};
</script>

<script lang="ts" setup>
import type IPlayerCardProps from "@/interfaces/IPlayerCardProps";
import { toRefs } from "vue";

const props = defineProps<{
  player: IPlayerCardProps;
}>();

const { name, number, team, photo } = toRefs(props.player);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.card {
  display: flex;
  flex-grow: 1;
  min-width: $min-team-card-w;
  flex-direction: column;

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
  }

  &__number {
    color: $light-red;
  }
}
</style>
