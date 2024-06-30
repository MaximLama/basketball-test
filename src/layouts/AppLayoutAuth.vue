<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<script lang="ts" setup></script>

<script>
export default {
  name: "AppLayoutAuth",
};
</script>
