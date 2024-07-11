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
  name: "TeamForm"
}
</script>

<script lang="ts" setup>
import UploadInput from '@/components/Inputs/UploadInput.vue';
import BaseInput from '@/components/Inputs/BaseInput.vue';
import BaseButton from '@/components/Buttons/BaseButton.vue';
import SecondaryButton from '@/components/Buttons/SecondaryButton.vue';
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/base-form/base-form";
@include base-form;
</style>