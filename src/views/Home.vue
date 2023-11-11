<template>
  <div>
    <Banner />
    <div class="relative flex flex-wrap lg:flex-nowrap bg-[#DCCCBC]">
      <section
        v-for="(n, id) in contentData"
        :key="id"
        class="flex justify-between items-start p-10 sm:px-20 md:px-25 lg:px-5 xl:px-10 w-full lg:w-1/3">
        <h2
          class="text-4xl font-bold txt-straight mr-9 lg:mr-6 xl:mr-9 relative bf-decorate">
          {{ n.title }}
        </h2>
        <h3 class="text-base leading-[1.36rem]">{{ n.content }}</h3>
      </section>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue'
  import Banner from '@components/Banner.vue'

  const contentData = reactive([
    {
      title: '外觀',
      content: `白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。`,
    },
    {
      title: '棲地',
      content: `白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。`,
    },
    {
      title: '食性',
      content: `以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。`,
    },
  ]);

</script>

<style lang="sass">
  .txt-straight
    writing-mode: vertical-lr
  .bf-decorate
    &:before
      content: ''
      width: 25px
      height: 25px
      display: block
      position: absolute
      bottom: -15px
      right: -10px
      border: 8px solid rgba(170, 102, 102, 0.6)
      border-radius: 25px
</style>
