<template>
  <div class="input__wrapper">
    <label class="input__label"> {{ label }}</label>
    <div class="input__inner" :name="props.name">
      <BaseSelect :options="options" selectClass="input__select" hoverSelectClass="input__select--hover"
        @change="onChange" :init="init" />
    </div>
    <span class="input__error-msg" v-show="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "LabelSelect",
};
</script>

<script lang="ts" setup>
import BaseSelect from "@/components/Inputs/BaseSelect.vue";
import type LabelSelectProps from "@/interfaces/LabelSelectProps";
import useLabelSelect from "@/composables/inputs/labelSelect";

const props = withDefaults(defineProps<LabelSelectProps>(), {
  label: "Label",
});

const { label, options, errorMessage, onChange, init } = useLabelSelect(props);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.input {
  &__inner {
    display: flex;
    position: relative;
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

:deep(.input__select) {
  background-color: $lightest-grey1;
  border: none;
}

:deep(.select) {
  width: 0;
}
</style>
