<template>
  <router-link :to="href" :class="'link'">
    <slot />
  </router-link>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { withDefaults, toRefs } from "vue";

interface ILinkProps {
  href: string;
}

const props = withDefaults(defineProps<ILinkProps>(), {
  href: "#",
});

const { href } = toRefs(props);
</script>

<script lang="ts">
export default {
  name: "BaseLink",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.link {
  text-decoration: underline;
  color: $red;
}
</style>
