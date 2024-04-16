<template>
  <form action="javascript:void(0)" class="signin">
    <h1 class="signin__title">Sign In</h1>
    <BaseInput :label="'Login'" :type="'text'" />
    <BaseInput :label="'Password'" :type="'password'" />
    <BaseButton :name="'Sign in'" />
    <div class="signin__additionals">
      <span class="signin__additional-message">Not a member yet? </span>
      <router-link
        :to="RouteNamesEnum.signin"
        :class="'signin__additional-link'"
        >Sign up</router-link
      >
    </div>
  </form>
</template>

<script lang="ts" setup>
import BaseInput from "@/components/Inputs/BaseInput.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import { RouterLink } from "vue-router";
import { RouteNamesEnum } from "@/router/router.types";
</script>

<script lang="ts">
export default {
  name: "SignInForm",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.signin {
  display: flex;
  flex-direction: column;
  width: 22.875rem;
  gap: 1.625rem;

  &__title {
    font-family: $title-font;
    font-weight: 400;
    font-style: normal;
    font-size: 2.25rem;
    line-height: 3.07rem;
    color: $blue;
    margin-bottom: 2rem;
  }

  &__additionals {
    margin: 0 auto;
  }

  &__additional-link {
    text-decoration: underline;
    color: $red;
  }
}
</style>
