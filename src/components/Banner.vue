<template>
  <div class="w-full bf-bg">
    <!-- <div class="h-[calc(70.4vw*0.57)] w-[70.4vw]"> -->
    <div class="relative h-auto lg:h-[calc(70.4vw*0.57)] overflow-hidden">
      <img
        :src="img"
        :alt="title"
        class="w-full transition ease-in-out hover:scale-105"
      />
      <div class="text-white absolute right-10 bottom-5 text-end">
        <h1 class="text-5xl font-bold">{{ title }}</h1>
        <h2 class="text-lg mt-1">{{ subtitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import img from '@assets/imgs/home/banner.jpg';

const title = ref('白頭翁 (Chinese bulbul)');
const subtitle = ref(
  `又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。`
);
</script>

<style lang="sass" scoped>
.aa
  overscroll-behavior: none
// .bf-bg:before
//   content: ''
//   width: 100%
//   height: 100%
//   display: block
//   position: fixed
//   top: 0
//   left: 345px
//   background: url(@assets/imgs/home/banner.jpg) 0 0 no-repeat
</style>
