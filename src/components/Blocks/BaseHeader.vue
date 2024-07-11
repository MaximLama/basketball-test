<template>
  <header class="header">
    <div id="menubutton">
      <MenuIcon />
    </div>
    <BaseLogo />
    <HeaderProfile />
  </header>
</template>

<script lang="ts" setup>
import BaseLogo from "@/components/Blocks/BaseLogo.vue";
import HeaderProfile from "@/components/Blocks/HeaderProfile.vue";
import MenuIcon from "@/components/Icons/MenuIcon.vue";
</script>

<script lang="ts">
export default {
  name: "BaseHeader",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.header {
  position: fixed;
  display: flex;
  height: $header-h;
  width: 100%;
  align-items: center;
  padding: $header-p;
  justify-content: space-between;
  box-shadow: 0 1px 10px rgba($color: $lightest-grey, $alpha: 0.5);
  z-index: 2;
  background: $white;

  @media (max-width: 1050px) {
    height: $header-h-1050;
    padding: $header-p-1050;
    justify-content: space-around;
    box-shadow: none;
  }
}

#menubutton {
  display: none;
  position: absolute;
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  left: 0.75rem;

  @media (max-width: 1050px) {
    display: flex;
  }
}
</style>
