<template>
  <main class="main">
    <div class="error404">
      <img src="@/assets/img/404.svg" class="error404__img">
      <span class="error404__title">Page not found</span>
      <span class="error404__subtitle">Sorry, we can’t find what you’re looking for</span>
    </div>
  </main>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "404"
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: $error404-w;
  padding: $error404-p;

  @media (max-width: 930px) {
    align-self: self-start;
    width: $error404-w-930;
    padding: $error404-p-930;
  }

  &__img {
    width: 100%;
    max-width: 23.75rem;
  }

  &__title {
    color: $lightest-red;
    font-weight: 800;
    font-size: $error404-title-fs;
    line-height: $error404-title-lh;
    margin-top: 3rem;
    margin-bottom: $error404-title-mb;
    text-align: center;

    @media (max-width: 930px) {
      font-size: $error404-title-fs-930;
      line-height: $error404-title-lh-930;
      margin-bottom: $error404-title-mb-930;
    }
  }

  &__subtitle {
    font-size: $error404-subtitle-fs;
    line-height: $error404-subtitle-lh;
    text-align: center;

    @media (max-width: 930px) {
      font-size: $error404-subtitle-fs-930;
      line-height: $error404-subtitle-lh-930;
    }
  }
}
</style>