<template>
  <form action="javascript:void(0)" class="signup">
    <h1 class="signup__title">Sign Up</h1>
    <BaseInput :label="'Name'" :type="'text'" />
    <BaseInput :label="'Login'" :type="'text'" />
    <BaseInput :label="'Password'" :type="'password'" />
    <BaseInput :label="'Enter your password again'" :type="'password'" />
    <BaseCheckbox :label="'I accept the agreement'" />
    <BaseButton :name="'Sign Up'" />
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
</script>

<script lang="ts">
export default {
  name: "SignUpForm",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.signup {
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
}
</style>
