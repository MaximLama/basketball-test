<template>
  <div class="container">
    <main class="main">
      <SignInForm />
    </main>
    <aside class="aside">
      <img src="@/assets/img/sign_in.svg" alt="" class="aside__img" />
    </aside>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SignInForm from "@/components/Forms/SignInForm.vue";

const inputModel = ref("");
inputModel.value = "Hi";
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
