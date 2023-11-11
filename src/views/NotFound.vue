<template>
  <div class="h-full text-center flex content-center justify-center flex-wrap">
    <h1 class="w-full text-9xl font-bold tracking-widest text-slate-400 animate-pulse">404</h1>
    <h2 class="w-full mt-10 mb-5 text-xl">抱歉...查不到您要的頁面！</h2>
    <router-link
      :to="{name: 'home'}"
      class="px-4 inline py-2 text-sm font-medium leading-5 bg-white text-[#AA6666] transition-colors duration-150 rounded focus:outline-none focus:shadow-outline-blue active:text-red-600 hover:bg-[#AA6666] hover:text-white pointer">
      返回首頁
    </router-link>
  </div>
</template>