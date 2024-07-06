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
  name: "AddPlayerForm"
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
.form {
  display: flex;
  flex-grow: 1;
  padding: 3rem 0;
}

.left {
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: start;
}

.right {
  display: flex;
  width: 50%;

  &__inner {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 22.875rem;
    gap: 1.5rem;
  }
}

.row {
  display: flex;
  flex-grow: 1;
  gap: 1.5rem;

  button {
    width: 100%;
  }
}
</style>