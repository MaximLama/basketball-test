<template>
  <div class="header-profile">
    <span class="header-profile__name">{{ user.name }}</span>
    <div class="header-profile__image-box">
      <img :src="user.avatarUrl && user.avatarUrl !== 'null' ? user.avatarUrl : DefaultProfileImage" alt=""
        class="header-profile__image" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeaderProfile",
};
</script>

<script lang="ts" setup>
import DefaultProfileImage from "@/assets/img/profile.jpg";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const { user } = storeToRefs(useUserStore());
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.header-profile {
  display: flex;
  align-items: center;

  @media (max-width: 1050px) {
    display: none;
  }

  &__image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;

    &-box {
      width: 1.875rem;
      height: 1.875rem;
      margin-left: 1rem;
      flex-shrink: 0;
    }
  }
}
</style>
