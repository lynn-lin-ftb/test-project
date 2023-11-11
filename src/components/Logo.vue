<template>
  <div
    class="
      w-[48px]
      h-[48px]
      lg:w-[74px] lg:h-[74px]
      xl:w-[98px] xl:h-[98px]
      rounded-full
      logo-shadow
      bg-white
      flex
      items-center
      justify-center
    "
  >
    <div class="w-full h-full flex items-center justify-center">
      <LogoSVG />
    </div>
  </div>
</template>

<script setup>
import LogoSVG from '@components/icons/LogoSVG.vue';
</script>

<style lang="sass" scoped>
.logo-shadow
  box-shadow: 0 0 6px rgba(0,0,0,0.25)
</style>
