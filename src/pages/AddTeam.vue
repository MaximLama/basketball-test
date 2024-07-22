<template>
  <div class="container">
    <div class="block">
      <div class="breadcrumbs__wrapper">
        <BaseBreadcrumbs :breadcrumbs="breadcrumbs" />
      </div>
      <TeamForm :submit="onSubmit" :error="onError" ref="form" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AddTeam"
};
</script>

<script lang="ts" setup>
import TeamForm from "@/components/Forms/TeamForm.vue";
import BaseBreadcrumbs from "@/components/Blocks/BaseBreadcrumbs.vue";
import { ref } from "vue";
import useAddTeam from "@/composables/teams/addTeam";

const form = ref<InstanceType<typeof TeamForm>>()

const { breadcrumbs, onSubmit, onError } = useAddTeam(form);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form-page";
@include base-form-page;
</style>