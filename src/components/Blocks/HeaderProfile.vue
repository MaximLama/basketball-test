<template>
  <div class="header-profile">
    <span class="header-profile__name">John Smith</span>
    <div class="header-profile__image-box">
      <img
        src="@/assets/img/profile.jpg"
        alt=""
        class="header-profile__image"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HeaderProfile",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.header-profile {
  display: flex;
  align-items: center;

  &__name {
    color: $dark-grey;
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
