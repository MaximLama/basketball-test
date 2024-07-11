<template>
  <div class="signout" @click.prevent="logout">
    <div class="signout__icon">
      <SignOutIcon />
    </div>
    <span class="signout__text">Sign out</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "SignOut"
};
</script>

<script lang="ts" setup>
import SignOutIcon from '@/components/Icons/SignOutIcon.vue';
import useLogout from '@/composables/auth/logout';
const { logout } = useLogout();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.signout {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  align-items: center;
  cursor: pointer;

  &__icon {
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
  }

  &__text {
    font-size: 0.75rem;
    color: $lightest-red;
    line-height: 1.125rem;
  }
}
</style>
