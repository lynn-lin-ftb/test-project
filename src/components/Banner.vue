<template>
  <div class="w-full bf-bg">
    <div class="relative">
      <div class="h-[311px] md:h-[336px] lg:h-[481px] xl:h-[559px] 2xl:h-[673px] flex items-center overflow-hidden">
        <Pictures
          :minImgUrl="smImg"
          :source="[
            {'srcset': img, 'media': '(min-width:768px)'},
            {'srcset': mdImg, 'media': '(min-width:640px)'}
          ]" />
      </div>
      <div class="text-white absolute inset-x-[1.5rem] bottom-7 md:right-10 md:bottom-5 text-end">
        <h1 class="text-5xl font-bold leading-[1.1]">
          <span class="block lg:inline">{{ title }}</span>
          <span class="block lg:inline">{{ titleEN }}</span>
        </h1>
        <h2 class="text-[1.1rem] md:text-lg mt-2">{{ subtitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Pictures from '@components/Pictures.vue'
  import img from '@assets/imgs/home/banner.jpg'
  import mdImg from '@assets/imgs/home/banner-md.jpg'
  import smImg from '@assets/imgs/home/banner-sm.jpg'

  const title = ref('白頭翁')
  const titleEN = ref('(Chinese bulbul)')
  const subtitle = ref(
    `又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。`
  )
</script>
