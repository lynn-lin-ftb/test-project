<template>
  <aside
    class=" max-w-[345px] min-w-[26%] xl:min-w-[345px] grow h-full hidden lg:block">
    <div class="w-[26%] xl:w-[345px] max-w-[345px] fixed z-10 h-full bg-white shadow">
      <div class="relative py-[78px] w-full">
        <h1
          class="text-[1.65rem] xl:text-3xl mr-2 xl:mr-0 text-center font-bold"
        >
          {{ title }}
        </h1>
        <Logo class="absolute top-[calc(50%-37px)] right-[-37px] xl:top-[calc(50%-48.5px)] xl:right-[-48.5px]" />
      </div>
      <Menu />
    </div>
  </aside>
</template>

<script setup>
  import { reactive, ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import Logo from '@/components/Logo.vue'
  import Menu from '@/components/Menu.vue'
  import { SITE_TITLE } from '@/utils/data.js'

  const title = ref(SITE_TITLE)
</script>

<style lang="sass" scoped>
  .shadow
    box-shadow: 4px 0 4px rgba(0,0,0,0.25)
</style>
