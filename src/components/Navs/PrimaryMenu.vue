<template>
  <aside class="nav">
    <PrimaryMenuItem
      v-for="({ svg, href, name }, index) in navLinks"
      :key="index"
      :svg="svg"
      :href="href"
      :name="name"
    />
    <SignOut />
  </aside>
  <teleport to="#menubutton">
    <div class="menu-btn">
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 2C0.45 2 0 1.55 0 1C0 0.45 0.45 0 1 0H17C17.55 0 18 0.45 18 1C18 1.55 17.55 2 17 2H1ZM1 7H17C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5H1C0.45 5 0 5.45 0 6C0 6.55 0.45 7 1 7ZM1 12H17C17.55 12 18 11.55 18 11C18 10.45 17.55 10 17 10H1C0.45 10 0 10.45 0 11C0 11.55 0.45 12 1 12Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import PrimaryMenuItem from "@/components/Navs/PrimaryMenuItem.vue";
import SignOut from "@/components/Navs/SignOut.vue";
import { RouteNamesEnum } from "@/router/router.types";
import IPrimaryMenuItemProps from "@/interfaces/IPrimaryMenuItemProps";
import { Teleport } from "vue";

const navLinks: IPrimaryMenuItemProps[] = [
  {
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9899 8C10.9899 9.66 9.65992 11 7.99992 11C6.33992 11 4.99992 9.66 4.99992 8C4.99992 6.34 6.33992 5 7.99992 5C9.65992 5 10.9899 6.34 10.9899 8ZM18.99 8C18.99 9.66 17.66 11 16 11C14.34 11 13 9.66 13 8C13 6.34 14.34 5 16 5C17.66 5 18.99 6.34 18.99 8ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM15.0301 13.05C15.3801 13.02 15.7101 13 16.0001 13C18.3301 13 23.0001 14.17 23.0001 16.5V18C23.0001 18.55 22.5501 19 22.0001 19H16.8201C16.9301 18.69 17.0001 18.35 17.0001 18V16.5C17.0001 15.03 16.2101 13.92 15.0701 13.09C15.0671 13.0869 15.064 13.083 15.0607 13.0787C15.0531 13.0688 15.044 13.0569 15.0301 13.05Z" fill="#9C9C9C"/>
          </svg>`,
    href: RouteNamesEnum.teams,
    name: "Teams",
  },
  {
    svg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9999 8C15.9999 10.21 14.2099 12 11.9999 12C9.78989 12 7.99989 10.21 7.99989 8C7.99989 5.79 9.78989 4 11.9999 4C14.2099 4 15.9999 5.79 15.9999 8ZM3.99997 18C3.99997 15.34 9.32997 14 12 14C14.67 14 20 15.34 20 18V19C20 19.55 19.55 20 19 20H4.99997C4.44997 20 3.99997 19.55 3.99997 19V18Z" fill="#9C9C9C"/>
          </svg>`,
    href: RouteNamesEnum.players,
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

  :deep {
    .signout {
      margin-top: auto;
    }
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
