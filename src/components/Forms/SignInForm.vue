<template>
  <form @submit.prevent="onSubmit" class="signin">
    <h1 class="signin__title">Sign In</h1>
    <BaseInput label="Login" type="text" name="login" />
    <BaseInput label="Password" type="password" name="password" />
    <BaseButton name="Sign in" :disabled="isSubmitting" />
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
import useLogin from "@/composables/auth/login";

const { isSubmitting, onSubmit } = useLogin();

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
