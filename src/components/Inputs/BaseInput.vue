<template>
  <div class="input__wrapper">
    <label class="input__label"> {{ label }}</label>
    <div class="input__inner">
      <input
        class="input"
        :class="{
          'input--error': error !== '',
          'input--password': type === 'password',
        }"
        :type="type"
        v-model="model"
        :disabled="disabled"
      />
      <span class="input__eye" v-if="type === 'password'"></span>
    </div>
    <span class="input__error-msg">{{ error }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseInput",
};
</script>

<script lang="ts" setup>
import { withDefaults, toRefs, defineModel } from "vue";

interface IInputProps {
  label: string;
  type: string;
  disabled?: boolean;
  error?: string;
}

const props = withDefaults(defineProps<IInputProps>(), {
  label: "Label",
  type: "text",
  disabled: false,
  error: "",
});

const { label, type, disabled, error } = toRefs(props);

const model = defineModel<string>();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.input {
  flex-grow: 1;
  height: 2.5rem;
  border: none;
  border-radius: 4px;
  background-color: $lightest-grey1;
  padding: 0.375rem 0.75rem;
  position: relative;

  &:hover {
    background-color: $lightest-grey;
  }

  &:focus {
    box-shadow: 0 0 5px $shadow-grey;
  }

  &:disabled {
    color: $lightest-grey;
    box-shadow: none;
    background-color: $lightest-grey1;
  }

  &--error {
    border: 1px solid $lightest-red;
  }

  &--password {
    padding-right: 1.75rem;
  }

  &__inner {
    display: flex;
    position: relative;
  }

  &__eye {
    background: url("@/assets/img/password_eye.svg") 0 0 no-repeat;
    display: block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__label {
    margin-bottom: 0.5rem;
  }

  &__error-msg {
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: $lightest-red;
    margin-top: 2px;
  }
}
</style>
