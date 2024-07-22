<template>
  <button class="btn" :class="{ 'btn--disabled': disabled }" :disabled="disabled">
    {{ name }}
  </button>
</template>

<script lang="ts">
export default {
  name: "SecondaryButton",
};
</script>

<script lang="ts" setup>
import type ButtonProps from "@/interfaces/ButtonProps";
import { toRefs, withDefaults } from "vue";

const props = withDefaults(defineProps<ButtonProps>(), {
  name: "",
  disabled: false,
});

const { name, disabled } = toRefs(props);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $white;
  height: 2.5rem;
  border: 1px solid $light-grey;
  border-radius: 0.25rem;
  font-size: 0.9375rem;
  line-height: 1.5rem;
  color: $light-grey;
  cursor: pointer;

  &:hover {
    background-color: $lightest-grey;
  }

  &:active {
    background-color: $light-grey;
    color: $grey;
  }

  &:disabled {
    background-color: $lightest-grey1;
    color: $lightest-grey;
  }
}
</style>
