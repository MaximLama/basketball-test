<template>
  <div class="roster">
    <div class="roster__header">
      Roster
    </div>
    <span class="roster__attribute">#</span>
    <span class="roster__attribute">Player</span>
    <span class="roster__attribute">Height</span>
    <span class="roster__attribute">Weight</span>
    <span class="roster__attribute">Age</span>
    <template v-for="(teammate, index) in teammates" :key="teammate.number">
      <div class="item__number" :class="{ 'last': index === teammates.length - 1 }">{{ teammate.number }}</div>
      <div class="item__detail" :class="{ 'last': index === teammates.length - 1 }">
        <div class="item__detail-wrapper">
          <div class="item__detail-image">
            <img :src="teammate.image">
          </div>
          <div class="item__detail-info">
            <span class="item__detail-name">{{ teammate.name }}</span>
            <span class="item__detail-position">{{ teammate.position }}</span>
          </div>
        </div>
      </div>
      <div class="item__height" :class="{ 'last': index === teammates.length - 1 }">{{ teammate.height }}</div>
      <div class="item__weight" :class="{ 'last': index === teammates.length - 1 }">{{ teammate.weight }}</div>
      <div class="item__age" :class="{ 'last': index === teammates.length - 1 }">{{ teammate.age }}</div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: "TeamComposition"
}
</script>

<script setup lang="ts">
import type IPlayerProps from '@/interfaces/IPlayerProps';
import { toRef } from 'vue';

const props = defineProps<{
  teammates: IPlayerProps[]
}>();

const teammates = toRef(() => props.teammates);
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
      display: block;
      width: 2.5rem;
      height: 2.5rem;

      img {
        object-fit: cover;
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