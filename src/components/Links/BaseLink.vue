<template>
  <router-link :to="href" class="link">
    <slot />
  </router-link>
</template>

<script lang="ts">
export default {
  name: "BaseLink",
};

interface ILinkProps {
  href: string;
}
</script>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { toRefs } from "vue";

const props = withDefaults(defineProps<ILinkProps>(), {
  href: "#",
});

const { href } = toRefs(props);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.link {
  text-decoration: underline;
  color: $red;
}
</style>
