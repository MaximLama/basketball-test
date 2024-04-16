<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
</script>

<style lang="scss">
@import "@/assets/scss/index.scss";
</style>
