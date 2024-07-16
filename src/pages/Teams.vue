<template>
  <div class="subgrid" v-show="!isEmpty">
    <TeamCard v-for="team in teams" :key="team.id" :team="team" />
  </div>
  <div class="empty" v-show="isEmpty">
    <img src="@/assets/img/empty_teams.svg" alt="" class="empty__img">
    <span class="empty__title">Empty here</span>
    <span class="empty__subtitle">Add new teams to continue</span>
  </div>
</template>

<script lang="ts" setup>
import type GetTeamsRequest from "@/api/dto/teams/GetTeamsRequest";
import TeamCard from "@/components/Cards/TeamCard.vue";
import useTeams from "@/composables/teams/teams";

const props = defineProps<{
  params: GetTeamsRequest
}>()

const { teams, isEmpty } = useTeams(props);

</script>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Teams",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.subgrid {
  display: grid;
  grid-area: subgrid;
  grid-template-columns: $subgrid-columns;
  grid-auto-rows: min-content;
  grid-gap: 1.25vw;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: $subgrid-columns-768;
  }
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: subgrid;
  justify-self: center;
  align-self: center;
  flex-shrink: 0;
  width: $empty-w;
  background-color: $white;
  border-radius: $empty-br;
  padding: $empty-p;

  @media (max-width: 875px) {
    align-self: self-start;
    width: $empty-w-875;
    border-radius: $empty-br-875;
    padding: $empty-p-875;
  }

  &__img {
    width: 100%;
    max-width: 30.125rem;
  }

  &__title {
    color: $lightest-red;
    font-weight: 800;
    font-size: $empty-title-fs;
    line-height: $empty-title-lh;
    margin-top: 3rem;
    margin-bottom: $empty-title-mb;
    text-align: center;

    @media (max-width: 875px) {
      margin-bottom: $empty-title-mb-875;
      font-size: $empty-title-fs-875;
      line-height: $empty-title-lh-875;
    }
  }

  &__subtitle {
    font-size: $empty-subtitle-fs;
    line-height: $empty-subtitle-lh;
    text-align: center;

    @media (max-width: 875px) {
      font-size: $empty-subtitle-fs-875;
      line-height: $empty-subtitle-lh-875;
    }
  }
}

@media (max-width: 1050px) {
  .subgrid {
    margin: $grid-items-m-1050;
  }
}

@media (max-width: 875px) {

  .subgrid,
  .empty {
    margin-bottom: $grid-mb-875;
  }
}
</style>