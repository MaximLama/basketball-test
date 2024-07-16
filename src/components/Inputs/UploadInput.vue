<template>
  <div class="upload__wrapper">
    <label class="upload">
      <input type="file" class="upload__input" @change="onFileChange">
      <div class="upload__image-wrapper">
        <img class="upload__image" :src="imageUrl ? baseUrl + imageUrl : imageUrl" alt="">
      </div>
      <PhotoIcon class="upload__icon" />
    </label>
    <div class="error-msg" v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "UploadInput"
}
</script>

<script lang="ts" setup>
import PhotoIcon from '@/components/Icons/PhotoIcon.vue';
import useUploadInput from '@/composables/inputs/uploadInput';
import { baseUrl } from '@/constants/constants';

const props = defineProps<{
  name: string
}>()

const emit = defineEmits<{
  change: [file: File | null]
}>()

const { imageUrl, errorMessage, onFileChange } = useUploadInput(props, emit)

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
    z-index: 2;
  }

  &__image {
    display: flex;
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    flex-grow: 1;

    &-wrapper {
      position: absolute;
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>