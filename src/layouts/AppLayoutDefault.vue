<template>
  <Header />
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
import Header from "@/components/Blocks/Header.vue";
import PrimaryMenu from "@/components/Navs/PrimaryMenu.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.container {
  display: flex;
  width: 100%;
  min-height: calc(100vh - $header-height);
}

.main {
  flex-grow: 1;
  background-color: $lightest-grey1;
  //padding: 2rem 4.17vw;
}
</style>
