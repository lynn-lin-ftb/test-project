<template>
  <nav
    class="
      h-20
      fixed
      top-0
      inset-x-0
      z-10
      flex
      justify-between
      items-center
      lg:hidden
      px-4
      bg-white
    "
  >
    <div class="w-[24px] h-[24px]">
      <MenuSVG />
    </div>
    <h1 class="text-xl font-bold">{{ title }}</h1>
    <Logo />
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { SITE_TITLE } from '@/utils/data.js';
import MenuSVG from '@components/icons/MenuSVG.vue';
import Logo from '@/components/Logo.vue';

const title = ref(SITE_TITLE);
</script>

<style lang="sass" scoped>
.logo-shadow
  box-shadow: 0 0 6px rgba(0,0,0,0.25)
</style>
