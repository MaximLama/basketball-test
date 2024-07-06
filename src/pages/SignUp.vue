<template>
  <SignUpForm />
</template>

<script lang="ts" setup>
import SignUpForm from "@/components/Forms/SignUpForm.vue";
import SignUpImage from "@/assets/img/sign_up.svg";
import { onMounted } from "vue";

const props = defineProps<{
  setImage: (newImage: string) => void
}>();

onMounted(() => props.setImage(SignUpImage));
</script>