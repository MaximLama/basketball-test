<template>
  <div class="container">
    <main class="main">
      <router-view v-slot="{ Component }">
        <component :is="Component" :setImage="setImage"></component>
      </router-view>
    </main>
    <aside class="aside">
      <img :src="image" alt="" class="aside__img" />
    </aside>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppLayoutAuth",
};
</script>

<script lang="ts" setup>
import { ref } from 'vue';

const image = ref('');
const setImage = (newImage: string) => {
  image.value = newImage;
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.container {
  display: flex;
  min-height: 100vh;
}

.main {
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
}

.aside {
  display: flex;
  flex: 3;
  align-items: center;
  justify-content: center;
  background-color: $light-blue;

  @media screen and (max-width: 1079px) {
    display: none;
  }
}
</style>