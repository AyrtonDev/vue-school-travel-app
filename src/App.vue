<script setup>
import TheNavigation from "./components/TheNavigation.vue";
</script>

<template>
  <TheNavigation></TheNavigation>
  <div class="container">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
