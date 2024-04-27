<template>
  <div class="card">
    <div class="card__top">
      <img :src="image" class="card__image" />
    </div>
    <div class="card__bottom">
      <div class="card__text-box">
        <span class="card__title">{{ name }}</span>
        <span class="card__subtitle">Year of foundation: {{ year }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ITeamCardProps from "@/interfaces/ITeamCardProps";
import { toRefs } from "vue";

const props = defineProps<{
  team: ITeamCardProps;
}>();

const { name, year, image } = toRefs(props.team);
</script>

<script lang="ts">
export default {
  name: "TeamCard",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.card {
  display: flex;
  width: 22.75rem;
  flex-direction: column;

  &__top {
    height: 17.5rem;
    background: linear-gradient(to bottom right, #707070, #393939);
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 9.375rem;
    height: 9.375rem;
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
