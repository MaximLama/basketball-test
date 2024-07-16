<template>
  <div class="card">
    <div class="card__header">
      <BaseBreadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="card__icons">
        <router-link :to="{ name: RouteNamesEnum.editTeam, params: { id: team.id } }" class="card__edit">
          <EditIcon />
        </router-link>
        <DeleteIcon />
      </div>
    </div>
    <div class="card__detail">
      <div class="card__image">
        <div class="image__wrapper">
          <img :src="team.imageUrl ? baseUrl + team.imageUrl : team.imageUrl">
        </div>
      </div>
      <div class="card__info">
        <div class="info__item-header">
          {{ team.name }}
        </div>
        <div class="info__item">
          <span class="info__item-title">Year of foundation</span>
          <span>{{ team.foundationYear || '-' }}</span>
        </div>
        <div class="info__item">
          <span class="info__item-title">Division</span>
          <span>{{ team.division || '-' }}</span>
        </div>
        <div class="info__item">
          <span class="info__item-title">Conference</span>
          <span>{{ team.conference || '-' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "TeamDetailCard"
}
</script>

<script lang="ts" setup>
import EditIcon from '@/components/Icons/EditIcon.vue';
import DeleteIcon from '@/components/Icons/DeleteIcon.vue';
import type BreadCrumbsProps from '@/interfaces/BreadcrumbsProps';
import BaseBreadcrumbs from '@/components/Blocks/BaseBreadcrumbs.vue';
import { computed, toRef } from 'vue';
import { RouteNamesEnum } from '@/router/router.types';
import type Team from '@/api/dto/teams/Team';
import { baseUrl } from '@/constants/constants';

const props = defineProps<{
  team: Team
}>();

const team = toRef(() => props.team)

const breadcrumbs = computed<BreadCrumbsProps[]>(() => [
  {
    text: "Teams",
    href: {
      name: RouteNamesEnum.teams
    }
  },
  {
    text: team.value.name
  }
])
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
  }

  &__image {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }

  &__info {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(2, auto);
    margin: 4.0625rem 0;
  }

  &__edit {
    display: flex;
    align-items: center;
  }
}

.breadcrumb__link {
  color: $red;
}

.image__wrapper {
  width: 13.125rem;
  height: 13.125rem;

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

  &:not(:last-of-type) {
    margin-bottom: 3.37rem;
  }

  &-title {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.05rem;
  }

  &-header {
    grid-area: 1 / 1 / 2 / span 2;
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 3.07rem;
    margin-bottom: 2.5rem;
  }
}
</style>