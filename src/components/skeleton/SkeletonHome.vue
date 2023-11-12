<template>
  <div class="w-full">
    <el-skeleton animated style="width: 100%">
      <template #template>
        <div class="hidden lg:block">
          <el-skeleton-item variant="image" style="width: 100%; height: 531px" />
        </div>
        <div class="block lg:hidden">
          <el-skeleton-item variant="image" style="width: 100%; height: 312px" />
        </div>
      </template>
    </el-skeleton>

    <div class="relative flex flex-wrap lg:flex-nowrap">
      <section
        v-for="n in [1,2,3]"
        :key="n"
        class="flex justify-between items-start flex-nowrap p-10 sm:px-20 md:px-25 lg:px-5 xl:px-10 w-full lg:w-1/3">
        <el-skeleton :rows="3" animated />
      </section>
    </div>
  </div>
</template>

<script setup>
  import { ElSkeleton, ElSkeletonItem } from 'element-plus'
</script>

<style lang="sass" scoped>
.picture
  max-height: 70%
  // lg:h-[calc(70.4vw*0.57)] lg:max-h-[70%]
</style>