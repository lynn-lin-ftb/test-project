<template>
  <div class="px-10 pb-10 text-center">
    <ul>
      <li v-for="n in menu" :key="n.link" class="py-2.5">
        <a
          @click="routerTo(n.name)"
          :alt="n.meta?.title"
          :class="[isCurrentRoute(n.name)? 'text-[#AA6666] border-b-2 border-[#AA6666]' : 'text-black', 'text-lg cursor-pointer hover:text-[#AA6666] hover:border-b-2 hover:border-[#AA6666]']">
          <span>{{ n.meta?.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>


<script setup>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { MENU_LIST } from '@/utils/data.js'

  const emit = defineEmits([
    'close'
  ])

  const menu = reactive(MENU_LIST())
  const router = useRouter()

  const isCurrentRoute = (linkName) => {
    const currentRoute = router.currentRoute
    return linkName === currentRoute.value.name
  }

  const routerTo = (name) => {
    router.push({ name })
    emit('close')
  }

</script>
