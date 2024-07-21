<template>
  <div class="form">
    <div class="left">
      <UploadInput @change="uploadImage" name="avatarUrl" />
    </div>
    <form @submit.prevent="onSubmit" class="right">
      <div class="right__inner">
        <BaseInput label="Name" type="text" name="name" />
        <LabelSelect label="Position" :options="props.positions" name="position" :init="position" />
        <LabelSelect label="Team" :options="props.teams" name="team" :init="team" />
        <div class="row">
          <BaseInput label="Height" type="text" name="height" />
          <BaseInput label="Weight" type="text" name="weight" />
        </div>
        <div class="row">
          <BaseInput label="Birthday" type="date" name="birthday" />
          <BaseInput label="Number" type="text" name="number" />
        </div>
        <div class="row">
          <SecondaryButton name="Cancel" @click.prevent="$router.push({ name: RouteNamesEnum.players })" />
          <BaseButton name="Save" :disabled="isSubmitting" />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "PlayerForm"
}
</script>

<script lang="ts" setup>
import UploadInput from '@/components/Inputs/UploadInput.vue';
import BaseInput from '@/components/Inputs/BaseInput.vue';
import LabelSelect from '@/components/Inputs/LabelSelect.vue';
import BaseButton from '@/components/Buttons/BaseButton.vue';
import SecondaryButton from '@/components/Buttons/SecondaryButton.vue';
import { RouteNamesEnum } from '@/router/router.types';
import type PlayerFormProps from '@/interfaces/PlayerFormProps';
import usePlayerForm from '@/composables/players/playerForm';

const props = defineProps<PlayerFormProps>();

const { uploadImage, onSubmit, isSubmitting, position, team } = usePlayerForm(props);

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form";
@include base-form;
</style>