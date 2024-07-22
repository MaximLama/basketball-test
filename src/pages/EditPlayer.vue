<template>
  <div class="container">
    <div class="block">
      <div class="breadcrumbs__wrapper">
        <BaseBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <PlayerForm :player="player" :submit="onSubmit" :error="onError" :positions="positions" :teams="teams"
        ref="form" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EditPlayer"
};
</script>

<script lang="ts" setup>
import PlayerForm from "@/components/Forms/PlayerForm.vue";
import BaseBreadcrumbs from "@/components/Blocks/BaseBreadcrumbs.vue";
import { ref } from "vue";
import useEditPlayer from "@/composables/players/editPlayer";

const form = ref<InstanceType<typeof PlayerForm>>()

const { breadcrumbs, onSubmit, onError, player, teams, positions } = useEditPlayer(form)
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form-page";
@include base-form-page;
</style>