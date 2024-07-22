<template>
  <div class="container">
    <div class="block">
      <div class="breadcrumbs__wrapper">
        <BaseBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <PlayerForm :submit="onSubmit" :error="onError" :positions="positions" :teams="teams" ref="form" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AddPlayer"
};
</script>

<script lang="ts" setup>
import PlayerForm from "@/components/Forms/PlayerForm.vue";
import BaseBreadcrumbs from "@/components/Blocks/BaseBreadcrumbs.vue";
import { ref } from "vue";
import useAddPlayer from "@/composables/players/addPlayer";

const form = ref<InstanceType<typeof PlayerForm>>()

const { breadcrumbs, onSubmit, onError, positions, teams } = useAddPlayer(form);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form-page";
@include base-form-page;
</style>