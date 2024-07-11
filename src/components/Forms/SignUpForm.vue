<template>
  <form @submit.prevent="onSubmit" class="signup">
    <h1 class="signup__title">Sign Up</h1>
    <BaseInput label="Name" type="text" name="name" />
    <BaseInput label="Login" type="text" name="login" />
    <BaseInput label="Password" type="password" name="password" />
    <BaseInput label="Enter your password again" type="password" name="confirmPassword" />
    <BaseCheckbox label="I accept the agreement" id="agreement" name="agreement" />
    <BaseButton name="Sign Up" :disabled="isSubmitting" />
    <div class="signup__additionals">
      <span class="signup__additional-message">Already a member? </span>
      <BaseLink :href="RouteNamesEnum.signin">Sign in</BaseLink>
    </div>
  </form>
</template>

<script lang="ts" setup>
import BaseInput from "@/components/Inputs/BaseInput.vue";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import BaseCheckbox from "@/components/Checkboxes/BaseCheckbox.vue";
import BaseLink from "@/components/Links/BaseLink.vue";
import { RouteNamesEnum } from "@/router/router.types";
import useRegister from "@/composables/auth/register";

const { isSubmitting, onSubmit } = useRegister();

</script>

<script lang="ts">
export default {
  name: "SignUpForm",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/auth";

.signup {
  @include auth;
}
</style>
