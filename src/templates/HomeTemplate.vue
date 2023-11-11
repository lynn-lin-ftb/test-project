<template>
  <div class="flex justify-between h-full">
    <Nav />
    <Sidebar />
    <main class="shrink mt-20 lg:mt-0">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '@components/Sidebar.vue';
import Nav from '@components/Nav.vue';
</script>
