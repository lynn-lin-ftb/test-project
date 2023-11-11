<template>
   <aside
    class=" max-w-[345px] min-w-[26%] xl:min-w-[345px] grow h-full hidden lg:block">
    <div class="w-[26%] xl:w-[345px] max-w-[345px] fixed z-10 h-full bg-white shadow">
      <div class="relative py-[78px] w-full">
        <div class="mr-2 xl:mr-0 text-center font-bold">
        <!-- <el-skeleton :rows="0" animated style="width: 80%; margin: 0 auto" /> -->
          <el-skeleton :rows="0" animated style="width: 100%; margin: 0 auto;">
            <template #template>
              <el-skeleton-item variant="h1" style="width: 60%; height: 40px" />
            </template>
          </el-skeleton>
        </div>
        <div class="absolute top-[calc(50%-37px)] right-[-37px] xl:top-[calc(50%-48.5px)] xl:right-[-48.5px] z-10">
          <div class="w-[48px] h-[48px] lg:w-[74px] lg:h-[74px] xl:w-[98px] xl:h-[98px] px-2 rounded-full shadow bg-white flex items-center justify-center">
          </div>
        </div>
      </div>
      <div class="px-10 pb-10 text-center">
        <el-skeleton animated style="width: 100%; margin: 0 auto">
          <template #template>
            <div class="py-2.5" v-for="n in [1,2,3,4]" :key="n">
              <el-skeleton-item variant="h3" style="width: 50%" />
            </div>
          </template>
        </el-skeleton>
      </div>
    </div>
  </aside>
</template>


<style lang="sass" scoped>
  .shadow
    box-shadow: 0 0 6px rgba(0,0,0,0.25)
</style>