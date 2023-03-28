<script setup>
import TheNavigation from "./components/TheNavigation.vue";
</script>

<template>
  <TheNavigation></TheNavigation>
  <div class="container">
    <RouterView v-slot="{ Component }">
      <Transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
