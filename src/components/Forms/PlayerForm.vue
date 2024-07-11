<template>
  <div class="form">
    <div class="left">
      <UploadInput />
    </div>
    <div class="right">
      <div class="right__inner">
        <BaseInput label="Name" type="text" />
        <LabelSelect label="Position" :options="positions" />
        <LabelSelect label="Team" :options="teams" />
        <div class="row">
          <BaseInput label="Height" type="text" />
          <BaseInput label="Weight" type="text" />
        </div>
        <div class="row">
          <BaseInput label="Birthday" type="date" />
          <BaseInput label="Number" type="text" />
        </div>
        <div class="row">
          <SecondaryButton name="Cancel" />
          <BaseButton name="Save" />
        </div>
      </div>
    </div>
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
import { ref } from 'vue';

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