<template>
  <nav :class="[showMenu ? 'h-auto': 'h-20 nav-shadow','block lg:hidden fixed top-0 inset-x-0 z-10 min-w-[320px]']">
    <div class="h-20 flex justify-between items-center px-4 relative bg-white z-20">
      <div class="w-[24px] h-[24px] mx-3 cursor-pointer" @click="toggleMenu(!showMenu)">
        <CloseSVG v-if="showMenu" class="animate-spin anima-spin" />
        <MenuSVG v-else />
      </div>
      <h1 class="text-xl font-bold">{{ title }}</h1>
      <Logo />
    </div>
    <div v-if="showMenu" class="bg-white nav-shadow anima-ping">
      <Menu @close="toggleMenu(false)" />
    </div>
  </nav>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import { SITE_TITLE, MENU_LIST } from '@/utils/data.js'
  import MenuSVG from '@components/icons/MenuSVG.vue'
  import CloseSVG from '@components/icons/CloseSVG.vue'
  import Logo from '@/components/Logo.vue'
  import Menu from '@/components/Menu.vue'

  const title = ref(SITE_TITLE)
  const menu = reactive(MENU_LIST())
  const showMenu = ref(false)

  const toggleMenu = (val) => {
    if (val)
      document.body.classList.add('lock-scroll')
    else
      document.body.classList.remove('lock-scroll')
    
    showMenu.value = val
  }
</script>

<style lang="sass" scoped>
  .logo-shadow
    box-shadow: 0 0 6px rgba(0,0,0,0.25)
  .nav-shadow
    box-shadow: 0 4px 4px rgba(0,0,0,0.25)

  .anima-spin
    animation: spin .3s linear 1
    animation-iteration-count: 1

  @keyframes spin
    from
      transform: rotate(0deg)
    to
      transform: rotate(90deg)

  .anima-ping
    animation: ping .3s linear 1
    animation-iteration-count: 1

  @keyframes ping
    from
      transform: translate(0, -200px)
    to
      transform: translate(0,0)
</style>
