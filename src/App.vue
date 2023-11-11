<template>
  <div class="w-full h-full">
    <div class="flex justify-between h-full">
      <SkeletonNav v-if="showSkeleton" />
      <Nav v-else />
      <div v-if="showSkeleton" class="max-w-[345px] min-w-[26%] xl:min-w-[345px] grow h-full hidden lg:block bg-white">
        <SkeletonSidebar />
      </div>
      <Sidebar v-else />
      <main class="shrink mt-20 lg:mt-0 w-full">
        <SkeletonHome v-if="showSkeleton" :class="cssName" />
        <RouterView v-else />
      </main>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import Sidebar from '@components/Sidebar.vue'
  import Nav from '@components/Nav.vue'
  import SkeletonHome from '@components/skeleton/SkeletonHome.vue'
  import SkeletonSidebar from '@components/skeleton/SkeletonSidebar.vue'
  import SkeletonNav from '@components/skeleton/SkeletonNav.vue'
  
  const showSkeleton = ref(true)
  const cssName = ref('')


  onMounted(() => {
    cssName.value = 'anima-fadeout'

    setTimeout(() => {
      showSkeleton.value = false
    }, 600)
  })
</script>


<style lang="sass" scoped>
  .anima-fadeout
    animation: fadeout .2s linear 1
    animation-iteration-count: 1
    animation-fill-mode: forwards
    animation-delay: .4s

  @keyframes fadeout
    from
      opacity: 1
    to
      opacity: 0
</style>