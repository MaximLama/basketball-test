<template>
  <div class="form">
    <div class="left">
      <UploadInput @change="uploadImage" name="imageUrl" />
    </div>
    <form @submit.prevent="onSubmit" class="right">
      <div class="right__inner">
        <BaseInput label="Name" type="text" name="name" />
        <BaseInput label="Division" type="text" name="division" />
        <BaseInput label="Conference" type="text" name="conference" />
        <BaseInput label="Year of foundation" type="text" name="foundationYear" />
        <div class="row">
          <SecondaryButton name="Cancel" @click.prevent="$router.push({ name: RouteNamesEnum.teams })" />
          <BaseButton name="Save" :disabled="isSubmitting" />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "TeamForm"
}
</script>

<script lang="ts" setup>
import UploadInput from '@/components/Inputs/UploadInput.vue';
import BaseInput from '@/components/Inputs/BaseInput.vue';
import BaseButton from '@/components/Buttons/BaseButton.vue';
import SecondaryButton from '@/components/Buttons/SecondaryButton.vue';
import { AxiosError } from 'axios';
import type TeamRequest from '@/api/dto/teams/TeamRequest';
import { RouteNamesEnum } from '@/router/router.types';
import useTeamForm from '@/composables/teams/teamForm';

const props = defineProps<{
  submit: (values: TeamRequest) => Promise<void>
  error: (e: AxiosError) => void
  team?: TeamRequest
}>();

const { isSubmitting, uploadImage, onSubmit, setFieldError } = useTeamForm(props);

defineExpose({
  setFieldError
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form";
@include base-form;
</style>