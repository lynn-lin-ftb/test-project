<template>
  <picture class="grow">
    <!-- 最小寬度 XXX 時顯示 name.jpg -->
    <source v-for="n in source"
      :key="n.srcset"
      :srcset="n.srcset"
      :media="n.media">
    <img :src="props.minImgUrl" class="max-w-none w-full h-full brightness-90">
  </picture>
</template>

<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    source: {
      type: Array,
      default: []
    },
    minImgUrl: {
      type: String
    }
  })
</script>