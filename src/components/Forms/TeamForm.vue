<template>
  <div class="form">
    <div class="left">
      <UploadInput @change="uploadImage" :error="imageError" />
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
import { uploadImage as uploadImageRequest } from '@/api/uploadImage';
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import { number, object, string } from 'yup';
import { isAxiosError } from 'axios';
import useScrollToError from '@/composables/helpers/scrollToError';
import { addTeam } from '@/api/teams/addTeam';
import type TeamRequest from '@/api/dto/teams/TeamRequest';
import { RouteNamesEnum } from '@/router/router.types';

const { handleSubmit, isSubmitting, setFieldError, errors } = useForm<TeamRequest>({
  validationSchema: toTypedSchema(object({
    name: string().required().min(3).max(100),
    foundationYear: number().integer().min(1900).max(new Date().getFullYear()),
    division: string().nullable(),
    conference: string().nullable(),
    imageUrl: string().nullable()
  }))
})

const { value: imageUrl, errorMessage: imageError } = useField<string>('imageUrl');

const uploadImage = async (file: File | null) => {
  if (file) {
    try {
      imageUrl.value = await uploadImageRequest(file);
    } catch (e) {
      if (isAxiosError(e)) {
        if (e.response?.status === 401) {
          setFieldError('imageUrl', 'Image upload error')
          useScrollToError(errors)
        }
      }
    }
  }
  else {
    imageUrl.value = '';
  }
}

const onSubmit = handleSubmit(async values => {
  try {
    await addTeam(values);
  }
  catch (e) {
    console.log(e);
    if (isAxiosError(e)) {
      if (e.response?.status === 409) {
        console.log('ok');
        setFieldError('name', 'Given name already exists')
        useScrollToError(errors);
      }
    }
  }
}, ({ errors }) => useScrollToError(errors));
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form";
@include base-form;
</style>