<template>
  <div class="card">
    <div class="card__top">
      <img :src="photo" class="card__image" />
    </div>
    <div class="card__bottom">
      <div class="card__text-box">
        <span class="card__title">{{ name }} #{{ number }}</span>
        <span class="card__subtitle">{{ team }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PlayerCard",
};

interface IPlayerCardProps {
  name: string,
  number: number,
  team: string,
  photo: string
}
</script>

<script lang="ts" setup>
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
    background: linear-gradient(to bottom right, #707070, #393939);
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 16vw;
    height: 16vw;
    max-width: 9.375rem;
    max-height: 9.375rem;
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
}
</style>
