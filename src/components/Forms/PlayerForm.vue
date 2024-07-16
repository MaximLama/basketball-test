<template>
  <div class="form">
    <div class="left">
      <UploadInput @change="uploadImage" name="avatarUrl" />
    </div>
    <form @submit.prevent="onSubmit" class="right">
      <div class="right__inner">
        <BaseInput label="Name" type="text" name="name" />
        <LabelSelect label="Position" :options="positions" name="position" />
        <LabelSelect label="Team" :options="teams" name="team" />
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
          <BaseButton name="Save" />
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
import { ref, watch } from 'vue';
import { RouteNamesEnum } from '@/router/router.types';
import type PlayerRequest from '@/api/dto/players/PlayerRequest';
import type { AxiosError } from 'axios';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import { date, number, object, string } from 'yup';

const props = defineProps<{
  submit: (values: PlayerRequest) => Promise<void>
  error: (e: AxiosError) => void
  player?: PlayerRequest
}>();

const initialValues = {
  name: '',
  number: undefined,
  position: '',
  team: undefined,
  birthday: undefined,
  height: undefined,
  weight: undefined,
  avatarUrl: undefined
}

const { handleSubmit, isSubmitting, setFieldError, setFieldValue, errors, resetForm } =
  useForm<PlayerRequest>({
    validationSchema: toTypedSchema(
      object({
        name: string().required().min(3).max(100),
        number: number().integer().positive(),
        position: string().required(),
        team: number().integer().positive(),
        birthday: date().max(new Date()),
        height: number().integer().positive(),
        weight: number().integer().positive(),
        avatarUrl: string().nullable()
      })
    ),
    initialValues
  })

watch(
  () => props.player,
  (newPlayer) => {
    if (newPlayer) {
      resetForm({ values: newPlayer })
    }
  }
)

const positions = ref([
  "Forward",
  "Center",
  "Guard"
]);

const teams = ref([
  "A",
  "B"
])
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form";
@include base-form;
</style>