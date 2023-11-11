import { useRouter } from 'vue-router'

export const SITE_TITLE = '白頭翁不吃小米'

export const MENU_LIST = () => {
  const router = useRouter()
  return router.options.routes?.filter(r => r.meta?.menu === true)
}
