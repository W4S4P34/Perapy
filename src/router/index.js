import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../page/Home.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "about" */ '../page/ProductList.vue')
    },
    {
        path: '/therapy',
        name: 'Pet Therapy',
        component: () => import(/* webpackChunkName: "about" */ '../page/PetList.vue')
    },
    {
        path: '/therapy/pet-detail',
        name: 'Pet Therapy Detail',
        component: () => import(/* webpackChunkName: "about" */ '../page/PetDetail.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
