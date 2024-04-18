<template>
  <header class="header">
    <Logo />
    <HeaderProfile />
  </header>
</template>

<script lang="ts" setup>
import Logo from "@/components/Blocks/Logo.vue";
import HeaderProfile from "@/components/Blocks/HeaderProfile.vue";
</script>

<script lang="ts">
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.header {
  display: flex;
  height: $header-height;
  width: 100%;
  align-items: center;
  padding-left: 3.1875rem;
  padding-right: 3.375rem;
  justify-content: space-between;
  box-shadow: 0 1px 10px rgba($color: $lightest-grey, $alpha: 0.5);
  z-index: 2;
}
</style>
