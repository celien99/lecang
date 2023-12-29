import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout/index.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: 'export-agent',
          name: 'export',
          component: () => import('@/views/service/dailichukou.vue')
        },
        {
          path: 'drop-shipping',
          name: 'drop',
          component: () => import('@/views/service/dropShipping.vue')
        },
        {
          path: 'shipping',
          name: 'shipping',
          component: () => import('@/views/service/shipping.vue')
        },
        {
          path: 'supplyChain',
          name: 'supplyChain',
          component: () => import('@/views/service/supplyChain.vue')
        },
        {
          path: 'overseas',
          name: 'overseas',
          component: () => import('@/views/service/overseas.vue')
        }
      ]
    },
  ]
})

export default router
