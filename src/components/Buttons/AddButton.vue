<template>
  <BaseButton name='Add +' class="add-btn" @click.prevent="next" />
</template>

<script lang="ts" setup>
import BaseButton from "@/components/Buttons/BaseButton.vue";
import useAddButton from "@/composables/buttons/addButton";
import { type RouteLocationAsRelativeGeneric } from "vue-router";

const props = defineProps<{
  to?: RouteLocationAsRelativeGeneric
}>();

const next = useAddButton(props);
</script>

<script lang="ts">
export default {
  name: "AddButton",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.add-btn {
  display: flex;
  width: $add-btn-w;
  flex-shrink: 0;

  @media (max-width: 875px) {
    width: $add-btn-w-875;
  }
}
</style>
