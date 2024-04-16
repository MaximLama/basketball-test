<template>
  <button
    class="btn"
    :class="{ 'btn--disabled': disabled }"
    :disabled="disabled"
  >
    {{ name }}
  </button>
</template>

<script lang="ts" setup>
import { toRefs, withDefaults } from "vue";

interface IButtonProps {
  name: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<IButtonProps>(), {
  name: "",
  disabled: false,
});

const { name, disabled } = toRefs(props);
</script>

<script lang="ts">
export default {
  name: "BaseButton",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $red;
  height: 2.5rem;
  border-radius: 0.25rem;
  font-size: 0.9375rem;
  line-height: 1.5rem;
  color: $white;

  &:hover {
    background-color: $light-red;
  }

  &:active {
    background-color: $dark-red;
  }

  &:disabled {
    background-color: $lightest-grey1;
    color: $lightest-grey;
  }
}
</style>
