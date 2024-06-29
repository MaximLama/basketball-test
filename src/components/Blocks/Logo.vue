<template>
  <img class="logo" :src="Logo" alt="" />
</template>

<script lang="ts">
export default {
  name: "Logo",
};
</script>

<script lang="ts" setup>
import Logo from "@/assets/img/icons/logo.svg";
</script>

<style scoped>
.logo {
  width: 11.9375rem;
  height: 3rem;
  flex-shrink: 0;
}
</style>
