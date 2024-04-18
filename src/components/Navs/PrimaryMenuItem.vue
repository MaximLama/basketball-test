<template>
  <div class="nav-item">
    <div class="nav-item__icon" v-html="svg"></div>
    <router-link
      :to="href"
      :class="'nav-item__text'"
      :active-class="'active'"
      >{{ name }}</router-link
    >
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { toRefs } from "vue";
import IPrimaryMenuItemProps from "@/interfaces/IPrimaryMenuItemProps";

const props = defineProps<IPrimaryMenuItemProps>();

const { svg, href, name } = toRefs(props);
</script>

<script lang="ts">
export default {
  name: "PrimaryMenuItem",
};
</script>
