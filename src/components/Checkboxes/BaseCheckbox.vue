<template>
  <div class="checkbox__wrapper">
    <div class="checkbox__inner">
      <input type="checkbox" class="checkbox" :class="{ 'checkbox--error': error !== '' }" :id="id" :disabled="disabled"
        :checked="checked" />
      <label :for="id" class="checkbox__label">{{ label }}</label>
    </div>
    <span class="checkbox__error-msg" v-if="error !== ''">{{ error }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseCheckbox",
};

interface ICheckboxProps {
  label: string;
  id: string;
  disabled?: boolean;
  error?: string;
  checked?: boolean;
}
</script>

<script lang="ts" setup>
import { withDefaults, toRefs } from "vue";

const props = withDefaults(defineProps<ICheckboxProps>(), {
  label: "Label",
  id: "id",
  disabled: false,
  error: "",
  checked: false,
});

const { label, id, disabled, error, checked } = toRefs(props);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;

  &+&__label {
    display: inline-flex;
    align-items: center;
    user-select: none;
    cursor: pointer;

    &::before {
      content: "";
      display: inline-block;
      width: 0.75rem;
      height: 0.75rem;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid $grey;
      border-radius: 2px;
      margin-right: 0.625rem;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }

  &--error+&__label {
    color: $lightest-red;

    &::before {
      border-color: $lightest-red;
    }
  }

  &:checked+&__label::before {
    border: none;
    background-color: red;
    background-image: url("@/assets/icons/img/checkbox.svg");
  }

  &:not(:disabled):not(:checked)+&__label:hover::before {
    border-color: $red;
  }

  &:disabled:not(:checked)+&__label {
    color: $lightest-grey;

    &::before {
      border-color: $lightest-grey;
    }
  }

  &:disabled:checked+&__label {
    color: $lightest-grey;

    &::before {
      background-color: $lightest-grey;
    }
  }

  &__error-msg {
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: $lightest-red;
    margin-top: 2px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__inner {
    display: flex;
  }
}
</style>
