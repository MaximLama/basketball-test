<template>
  <BaseButton name='Add +' class="add-btn" />
</template>

<script lang="ts" setup>
import BaseButton from "@/components/Buttons/BaseButton.vue";
</script>

<script lang="ts">
export default {
  name: "AddButton",
};
</script>

<style lang="scss" scoped>
.add-btn {
  width: 6.5rem;
  flex-shrink: 0;
  grid-area: add_button;
  justify-self: end;
}
</style>
