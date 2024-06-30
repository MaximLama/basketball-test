<template>
  <aside class="nav">
    <PrimaryMenuItem v-for="({ svg, href, name }, index) in navLinks" :key="index" :svg="svg" :href="href"
      :name="name" />
    <SignOut />
  </aside>
  <teleport to="#menubutton">
    <div class="menu-btn">
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
import { RouteNamesEnum } from "@/router/router.types";
import type IPrimaryMenuItemProps from "@/interfaces/IPrimaryMenuItemProps";
import { Teleport } from "vue";
import TeamsIcon from "@/components/Icons/TeamsIcon.vue";
import PlayersIcon from "@/components/Icons/PlayersIcon.vue";

const navLinks: IPrimaryMenuItemProps[] = [
  {
    svg: TeamsIcon,
    href: { name: RouteNamesEnum.teams },
    name: "Teams",
  },
  {
    svg: PlayersIcon,
    href: { name: RouteNamesEnum.players },
    name: "Players",
  },
];
</script>

<script lang="ts">
export default {
  name: "PrimaryMenu",
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  width: 8.75rem;
  flex-shrink: 0;
  padding: 2rem;
  gap: 2.25rem;

  :deep(.signout) {
    margin-top: auto;
  }

  @media screen and (max-width: 1395px) {
    display: none;
  }
}

.menu-btn {
  flex-shrink: 0;
  width: 1.5rem;
  height: 1.5rem;
}
</style>
