<template>
  <nav id="nav">
    <RouterLink id="logo" to="/">Vue School Travel App</RouterLink>
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </RouterLink>
  </nav>
</template>

<script setup>
import sourceData from "../data.json";

const destinations = sourceData.destinations;
</script>
