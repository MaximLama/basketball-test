<template>
  <img class="logo" :src="Logo" alt="" />
</template>

<script lang="ts">
export default {
  name: "BaseLogo",
};
</script>

<script lang="ts" setup>
import Logo from "@/assets/img/icons/logo.svg";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.logo {
  width: $logo-w;
  height: $logo-h;
  flex-shrink: 0;

  @media (max-width: 1050px) {
    width: $logo-w-1050;
    height: $logo-h-1050;
  }
}
</style>
