<template>
  <div class="form">
    <div class="left">
      <UploadInput />
    </div>
    <div class="right">
      <div class="right__inner">
        <BaseInput label="Name" type="text" />
        <BaseInput label="Division" type="text" />
        <BaseInput label="Conference" type="text" />
        <BaseInput label="Year of foundation" type="text" />
        <div class="buttons">
          <SecondaryButton name="Cancel" />
          <BaseButton name="Save" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AddTeamForm"
}
</script>

<script lang="ts" setup>
import UploadInput from '@/components/Inputs/UploadInput.vue';
import BaseInput from '@/components/Inputs/BaseInput.vue';
import BaseButton from '@/components/Buttons/BaseButton.vue';
import SecondaryButton from '@/components/Buttons/SecondaryButton.vue';
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-grow: 1;
  padding: 3rem 0;
}

.left {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: start;
}

.right {
  display: flex;
  flex-grow: 1;

  &__inner {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 22.875rem;
    gap: 1.5rem;
  }
}

.buttons {
  display: flex;
  flex-grow: 1;
  gap: 1.5rem;

  button {
    flex-grow: 1;
  }
}
</style>