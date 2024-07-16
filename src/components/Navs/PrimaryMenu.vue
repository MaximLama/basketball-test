<template>
  <aside class="nav" :class="{ 'nav--active': isMobileMenuShown }">
    <PrimaryMenuItem v-for="({ svg, href, name, baseRoute }, index) in navLinks" :key="index" :svg="svg" :href="href"
      :name="name" :base-route="baseRoute" />
    <SignOut />
  </aside>
  <div class="overlay" :class="{ 'active': isMobileMenuShown }" @click.prevent="hideMainMenu"></div>
  <teleport to="#menubutton">
    <div class="menu-btn" @click.prevent="toggleMainMenu">
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M1 2C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0H17C17.55 0 18 0.45 18 1C18 1.55 17.55 2 17 2H1ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12Z"
          fill="black" fill-opacity="0.54" />
      </svg>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import PrimaryMenuItem from "@/components/Navs/PrimaryMenuItem.vue";
import SignOut from "@/components/Navs/SignOut.vue";
import usePrimaryMenu from "@/composables/menu/primaryMenu";

const { navLinks, isMobileMenuShown, toggleMainMenu, hideMainMenu } = usePrimaryMenu();

</script>

<script lang="ts">
export default {
  name: "PrimaryMenu",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.nav {
  position: fixed;
  display: flex;
  flex-direction: column;
  height: calc(100vh - $header-h);
  width: $nav-width;
  flex-shrink: 0;
  padding: 2rem;
  gap: 2.25rem;
  background: $white;

  :deep(.signout) {
    margin-top: auto;
  }

  @media screen and (max-width: 1050px) {
    display: none;
  }

  &--active {
    @media (max-width: 1050px) {
      display: flex;
      z-index: 2;
      height: calc(100vh - $header-h-1050);
    }
  }
}

.menu-btn {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
}

@media (max-width: 1050px) {
  .overlay.active {
    position: fixed;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: $overlay-grey;
    opacity: 60%;
    z-index: 1;
    overflow-y: auto;
  }
}
</style>
