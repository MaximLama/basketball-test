<template>
  <div class="input__wrapper">
    <label class="input__label"> {{ label }}</label>
    <div class="input__inner">
      <BaseSelect :options="options" selectClass="input__select" hoverSelectClass="input__select--hover" />
      <!--input class="input" :class="{
        'input--error': error !== '',
        'input--password': type === 'password',
      }" :type="type" v-model="model" :disabled="disabled" />
      <span class="input__eye" v-if="type === 'password'"></span-->
    </div>
    <span class="input__error-msg">{{ error }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseInput",
};

interface LabelSelectProps {
  label: string;
  options: string[];
  error?: string;
}
</script>

<script lang="ts" setup>
import { toRefs } from "vue";
import BaseSelect from "@/components/Inputs/BaseSelect.vue";

const props = withDefaults(defineProps<LabelSelectProps>(), {
  label: "Label",
  error: "",
});

const { label, options, error } = toRefs(props);
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
</style>
