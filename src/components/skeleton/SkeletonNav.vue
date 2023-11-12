<template>
  <nav class="h-20 nav-shadow block lg:hidden fixed top-0 inset-x-0 z-10">
    <div class="h-20 flex justify-between items-center px-4 relative bg-white z-20">
      <div class="w-[24px] h-[24px] mx-3 cursor-pointer">
        <el-skeleton :rows="0" animated style="width: 100%;">
          <template #template>
            <el-skeleton-item variant="h1" style="width: 24px; height: 24px;" />
          </template>
        </el-skeleton>
      </div>
      <div>
        <el-skeleton :rows="0" animated style="width: 140px">
          <template #template>
            <el-skeleton-item variant="h1" style="width: 100%; height: 28px;" />
          </template>
        </el-skeleton>
      </div>
      <div class="">
        <div class="w-[48px] h-[48px] lg:w-[74px] lg:h-[74px] xl:w-[98px] xl:h-[98px] px-2 rounded-full shadow bg-white flex items-center justify-center bg-[#eff0f3]" />
      </div>
      <!-- <Logo /> -->
    </div>
  </nav>
</template>

<script setup>
  import { ElSkeleton, ElSkeletonItem } from 'element-plus'
</script>

<style lang="sass" scoped>
.nav-shadow
  box-shadow: 0 4px 4px rgba(0,0,0,0.25)
</style>