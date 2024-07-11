<template>
  <div class="input__wrapper">
    <label class="input__label"> {{ label }}</label>
    <div class="input__inner">
      <input class="input" :class="{
        'input--error': errorMessage,
        'input--password': type === 'password',
      }" :type="type" v-model="value" :name="name" :disabled="disabled" @input="onChange" />
      <span class="input__eye" v-if="type === 'password'"></span>
      <span class="input__date" v-if="type === 'date'"></span>
    </div>
    <span class="input__error-msg">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseInput",
};

interface IInputProps {
  label: string;
  type: string;
  name: string;
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { toRefs } from "vue";

const props = withDefaults(defineProps<IInputProps>(), {
  label: "Label",
  type: "text",
  disabled: false,
});

const { label, type, disabled, name } = toRefs(props);

const { value, errorMessage, setErrors } = useField(name, undefined, {
  validateOnValueUpdate: false
});

const onChange = () => {
  setErrors([]);
}
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
  width: 100%;

  &:hover {
    background-color: $lightest-grey;

    &~.input__date {
      background-color: $lightest-grey;
    }
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
    background: url("@/assets/img/icons/password_eye.svg") 0 0 no-repeat;
    display: block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
  }

  &__date {
    background: url("@/assets/img/icons/calendar_blank.svg") 0 0 no-repeat;
    background-color: $lightest-grey1;
    display: block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
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
