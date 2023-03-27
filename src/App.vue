<script setup>
import TheNavigation from "./components/TheNavigation.vue";
</script>

<template>
  <div class="container">
    <TheNavigation></TheNavigation>
    <RouterView :key="$route.path"></RouterView>
  </div>
</template>
