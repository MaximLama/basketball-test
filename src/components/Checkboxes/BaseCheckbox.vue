<template>
  <div class="checkbox__wrapper">
    <div class="checkbox__inner">
      <input type="checkbox" class="checkbox" :class="{ 'checkbox--error': errorMessage }" :id="id" :disabled="disabled"
        v-model="value" :name="name" @input="onChange" />
      <label :for="id" class="checkbox__label">{{ label }}</label>
    </div>
    <span class="error-msg" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseCheckbox",
};

interface ICheckboxProps {
  label: string;
  id: string;
  name: string;
  disabled?: boolean;
}
</script>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { withDefaults, toRefs } from "vue";

const props = withDefaults(defineProps<ICheckboxProps>(), {
  label: "Label",
  id: "id",
  disabled: false,
  checked: false,
});

const { label, id, name, disabled } = toRefs(props);

const { value, errorMessage, setErrors } = useField(name, undefined, {
  validateOnValueUpdate: false
});

const onChange = () => {
  setErrors([]);
}
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
    background-image: url("@/assets/img/icons/checkbox.svg");
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

  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__inner {
    display: flex;
  }
}
</style>
