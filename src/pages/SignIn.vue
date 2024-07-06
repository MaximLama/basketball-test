<template>
  <SignInForm />
</template>

<script lang="ts" setup>
import SignInForm from "@/components/Forms/SignInForm.vue";
import SignInImage from "@/assets/img/sign_in.svg";
import { onMounted } from "vue";

const props = defineProps<{
  setImage: (newImage: string) => void
}>();

onMounted(() => props.setImage(SignInImage));
</script>
