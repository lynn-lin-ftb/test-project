<template>
  <div class="w-[48px] h-[48px]
              lg:w-[74px] lg:h-[74px]
              xl:w-[98px] xl:h-[98px]
              rounded-full logo-shadow bg-white flex items-center justify-center">
    <div class="relative w-full h-full flex items-center justify-center">
      <div class="logo absolute inset-0">
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="sass" scoped>
  .logo-shadow
    box-shadow: 0 0 6px rgba(0,0,0,0.25)

  $logo-color: #333333

  .logo
    min-width: 24px
    min-height: 24px
    margin: 24% 26% 28% 23%
    border-radius: 63% 34% 41% 0
    background-color: $logo-color
    &:after, &:before
      content: ''
      position: absolute
    &:after
      left: -1%
      right: -1%
      top: 19%
      bottom: 19%
      border-radius: 73% 26% 41% 0
      background: radial-gradient(circle at 68% 49%, $logo-color 13%, transparent 0), linear-gradient(white, white)
      z-index: 1
    &:before
      left: 97%
      right: -22%
      top: 31%
      bottom: 54%
      border-radius: 0% 100% 0 0
      background: radial-gradient(circle at -115% 70%, white 60%, transparent 0), linear-gradient($logo-color, $logo-color)
      transform: rotate(-11deg)
      z-index: 2
</style>
