<template>
  <label class="upload">
    <input type="file" class="upload__input">
    <PhotoIcon class="upload__icon" />
  </label>
</template>

<script lang="ts">
export default {
  name: "UploadInput"
}
</script>

<script lang="ts" setup>
import PhotoIcon from '@/components/Icons/PhotoIcon.vue';
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.upload {
  position: relative;
  display: flex;
  max-width: 21rem;
  width: 50vw;
  max-height: 16.25rem;
  height: 38.4vw;
  border-radius: 0.625rem;
  opacity: 50%;
  background-color: $light-grey;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &__input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  &__icon {
    max-width: 4.625rem;
    width: 11vw;
    max-height: 4.625rem;
    height: 11vw;
    flex-shrink: 0;
  }
}
</style>