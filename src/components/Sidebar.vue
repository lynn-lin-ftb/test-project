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
        <logo
          class="
            absolute
            top-[calc(50%-37px)]
            right-[-37px]
            xl:top-[calc(50%-48.5px)] xl:right-[-48.5px]
          "
        ></logo>
      </div>

      <div class="px-10 pb-10 text-center">
        <ul>
          <li v-for="n in menu" :key="n.link" class="py-2.5">
            <router-link
              to="/"
              class="
                text-black text-lg
                cursor-pointer
                hover:text-[#AA6666] hover:border-b-2 hover:border-[#AA6666]
              "
            >
              <span>{{ n.name }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Logo from '@/components/Logo.vue';
import { SITE_TITLE } from '@/utils/data.js';

const title = ref(SITE_TITLE);
const menu = reactive([
  { name: '白頭翁的特性', link: 'traits' },
  { name: '白頭翁的故事', link: 'story' },
  { name: '白頭翁的美照', link: 'photo' },
  { name: '白頭翁的危機', link: 'crisis' },
]);
</script>

<style lang="sass" scoped>
.shadow
  box-shadow: 4px 0 4px rgba(0,0,0,0.25)
</style>
