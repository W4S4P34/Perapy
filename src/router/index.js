import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../page/Home.vue')
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import(/* webpackChunkName: "services" */ '../page/Services.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "product" */ '../page/ProductList.vue')
    },
    {
        path: '/therapy',
        name: 'Pet Therapy',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/PetList.vue')
    },
    {
        path: '/therapy/:petId',
        name: 'Pet Detail',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/PetDetail.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
