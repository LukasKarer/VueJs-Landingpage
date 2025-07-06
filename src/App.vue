<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
html,
body {
  scroll-behavior: smooth;
  background-color: $bg;
  padding-top: 120px; /* Account for fixed navbar height */
}
</style>
