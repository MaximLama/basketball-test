<template>
  <component :is="$route.meta.layoutComponent">
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "AppLayout",
};
</script>
