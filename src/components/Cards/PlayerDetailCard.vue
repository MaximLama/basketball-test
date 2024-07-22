<template>
  <div class="card">
    <div class="card__header">
      <BaseBreadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="card__icons">
        <router-link :to="{ name: RouteNamesEnum.editPlayer, params: { id: player.id } }" class="card__edit">
          <EditIcon />
        </router-link>
        <div class="card__delete" @click.prevent="deletePlayer">
          <DeleteIcon />
        </div>
      </div>
    </div>
    <div class="card__detail">
      <div class="card__image">
        <div class="image__wrapper">
          <img :src="useImage(player.avatarUrl)">
        </div>
      </div>
      <div class="card__info">
        <div class="info__item-header">
          <span>{{ player.name }} <span class="light-red">{{ player.number ? '#' + player.number : '-' }}</span></span>
        </div>
        <div class="info__item">
          <span class="info__item-title">Position</span>
          <span>{{ player.position }}</span>
        </div>
        <div class="info__item">
          <span class="info__item-title">Team</span>
          <span>{{ player.teamName }}</span>
        </div>
        <div class="info__item">
          <span class="info__item-title">Height</span>
          <span>{{ player.height }} cm</span>
        </div>
        <div class="info__item">
          <span class="info__item-title">Weight</span>
          <span>{{ player.weight }} kg</span>
        </div>
        <div class="info__item">
          <span class="info__item-title">Age</span>
          <span>{{ age }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "PlayerDetailCard"
}
</script>

<script lang="ts" setup>
import EditIcon from '@/components/Icons/EditIcon.vue';
import DeleteIcon from '@/components/Icons/DeleteIcon.vue';
import BaseBreadcrumbs from '@/components/Blocks/BaseBreadcrumbs.vue';
import { RouteNamesEnum } from '@/router/router.types';
import type PlayerDetail from '@/api/dto/players/PlayerDetail';
import useImage from '@/composables/helpers/image';
import usePlayerDetailCard from '@/composables/players/playerDetailCard';

const props = defineProps<{ player: PlayerDetail }>();

const { breadcrumbs, player, age, deletePlayer } = usePlayerDetailCard(props);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.card {
  display: flex;
  flex-direction: column;
  height: auto;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: $white;
    border: 0.5px solid $light-grey;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
  }

  &__icons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__detail {
    display: flex;
    background: $card-gradient;
    color: $white;
    font-size: 1.125rem;
    line-height: 1.56rem;

    @media (max-width: 1440px) {
      flex-direction: column;
    }
  }

  &__image {
    display: flex;
    flex-grow: 1;
    align-items: flex-end;
    justify-content: center;
  }

  &__info {
    flex-grow: 1;
    display: grid;
    grid-template-columns: $detail-card-template;
    margin: 4.0625rem 0;

    @media (max-width: 1440px) {
      grid-template-columns: $detail-card-template-1440;
    }
  }

  &__edit {
    display: flex;
    align-items: center;
  }

  &__delete {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
}

.image__wrapper {
  max-width: $large-card-image-size;
  max-height: $large-card-image-size;
  display: flex;
  align-items: end;

  @media screen {
    width: $large-card-image-size-1050;
    height: $large-card-image-size-1050;
  }

  img {
    object-fit: contain;
    width: 100%;
    max-height: 100%;
  }
}

.info__item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 1440px) {
    align-items: center;
  }

  &:not(:last-of-type) {
    margin-bottom: 3.37rem;
  }

  &-title {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.05rem;
  }

  &-header {
    display: flex;
    grid-area: 1 / 1 / 2 / span 2;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 3.07rem;
    margin-bottom: 2.5rem;

    @media (max-width: 1440px) {
      grid-area: auto;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>