<template>
  <div class="roster">
    <div class="roster__header">
      Roster
    </div>
    <span class="roster__attribute" :class="{ 'last': isLast() }">#</span>
    <span class="roster__attribute" :class="{ 'last': isLast() }">Player</span>
    <span class="roster__attribute" :class="{ 'last': isLast() }">Height</span>
    <span class="roster__attribute" :class="{ 'last': isLast() }">Weight</span>
    <span class="roster__attribute" :class="{ 'last': isLast() }">Age</span>
    <template v-for="(player, index) in players" :key="player.id">
      <div class="item__number" :class="{ 'last': isLast(index) }">{{ player.number ? player.number : '-'
        }}
      </div>
      <div class="item__detail" :class="{ 'last': isLast(index) }">
        <div class="item__detail-wrapper">
          <div class="item__detail-image">
            <img :src="useImage(player.avatarUrl)">
          </div>
          <div class="item__detail-info">
            <span class="item__detail-name">{{ player.name }}</span>
            <span class="item__detail-position">{{ player.position }}</span>
          </div>
        </div>
      </div>
      <div class="item__height" :class="{ 'last': isLast(index) }">{{ player.height }} cm</div>
      <div class="item__weight" :class="{ 'last': isLast(index) }">{{ player.weight }} kg</div>
      <div class="item__age" :class="{ 'last': isLast(index) }">{{ usePlayerAge(player.birthday) }}</div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: "TeamComposition"
}
</script>

<script setup lang="ts">
import type Player from '@/api/dto/players/Player';
import useImage from '@/composables/helpers/image';
import usePlayerAge from '@/composables/players/playerAge';
import { toRef } from 'vue';

const props = defineProps<{
  players: Player[]
}>();

const players = toRef(() => props.players);

const isLast = (index?: number) => {
  return typeof index === 'undefined' ? players.value.length === 0 : index === players.value.length - 1
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.roster {
  display: grid;
  grid-template-columns: 5.5rem auto 8rem 8rem 4rem;
  grid-template-rows: 3.375rem 2.5rem;
  grid-auto-rows: 3.5rem;
  background: $white;
  border: $default-border;
  border-radius: 0.625rem;

  &__header {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 1.125rem;
    line-height: 1.54rem;
    border-bottom: $default-border;
    height: 100%;
  }

  &__attribute {
    display: flex;
    align-items: center;
    border-bottom: $default-border;
    height: 100%;

    &.last {
      border-bottom: none;
    }
  }

  &__attribute:first-of-type {
    padding-left: 2rem;
  }

  &__attribute:last-of-type {
    padding-right: 2rem;
  }
}

.item {
  &__detail {
    &-wrapper {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    &-info {
      display: flex;
      flex-direction: column;
    }

    &-image {
      display: flex;
      width: 2.5rem;
      height: 2.5rem;
      flex-shrink: 0;

      img {
        max-width: 100%;
        max-height: 100%;
        flex-grow: 1;
        object-fit: contain;
        object-position: center;
        border-radius: 50%;
      }
    }

    &-position {
      font-size: 0.75rem;
      color: $light-grey;
    }
  }

  &__number,
  &__detail,
  &__height,
  &__weight,
  &__age {
    display: flex;
    align-items: center;
    border-bottom: $default-border;

    &.last {
      border-bottom: none;
    }
  }

  &__number {
    padding-left: 2rem;
  }

  &__age {
    padding-right: 2rem;
  }
}
</style>