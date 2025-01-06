<template>
  <nav
    class="h-20 bg-emerald-800 text-white text-xl flex items-center justify-between px-8"
  >
    <RouterLink :to="{ name: 'home' }" class="logo">Logo</RouterLink>
    <div class="menu flex gap-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </nav>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<style scoped></style>
