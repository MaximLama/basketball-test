<template>
  <BaseHeader />
  <div class="container">
    <PrimaryMenu />
    <main class="main">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import BaseHeader from "@/components/Blocks/BaseHeader.vue";
import PrimaryMenu from "@/components/Navs/PrimaryMenu.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.container {
  position: relative;
  display: flex;
  width: 100%;
  min-height: calc(100vh - $header-h);
  padding-top: $header-h;

  @media (max-width: 1050px) {
    padding-top: $header-h-1050;
  }
}

.main {
  flex-grow: 1;
  background-color: $lightest-grey1;
  margin-left: $nav-width;

  @media (max-width: 1050px) {
    margin-left: 0;
  }
}
</style>
