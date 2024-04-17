<template>
  <div class="container">
    <main class="main">
      <SignUpForm />
    </main>
    <aside class="aside">
      <img src="@/assets/img/sign_up.svg" alt="" class="aside__img" />
    </aside>
  </div>
</template>

<script lang="ts" setup>
import SignUpForm from "@/components/Forms/SignUpForm.vue";
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
