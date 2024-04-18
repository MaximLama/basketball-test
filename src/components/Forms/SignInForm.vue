<template>
  <form action="javascript:void(0)" class="signin">
    <h1 class="signin__title">Sign In</h1>
    <BaseInput :label="'Login'" :type="'text'" />
    <BaseInput :label="'Password'" :type="'password'" />
    <BaseButton :name="'Sign in'" />
    <div class="signin__additionals">
      <span class="signin__additional-message">Not a member yet? </span>
      <BaseLink :href="RouteNamesEnum.signup">Sign up</BaseLink>
    </div>
  </form>
</template>

<script lang="ts" setup>
import BaseInput from "@/components/Inputs/BaseInput.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseLink from "@/components/Links/BaseLink.vue";
import { RouteNamesEnum } from "@/router/router.types";
</script>

<script lang="ts">
export default {
  name: "SignInForm",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/auth";

.signin {
  @include auth;
}
</style>
