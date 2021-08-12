import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "placeholder" */ '../page/Placeholder.vue')
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import(/* webpackChunkName: "placeholder" */ '../page/Placeholder.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "product" */ '../page/ProductList.vue')
    },
    {
        path: '/products/:productId',
        name: 'ProductDetail',
        component: () => import(/* webpackChunkName: "productDetail" */ '../page/ProductDetail.vue')
    },
    {
        path: '/therapy',
        name: 'PetTherapy',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/PetList.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/Cart.vue')
    },
    {
        path: '/therapy/:petId',
        name: 'PetDetail',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/PetDetail.vue')
    },
    {
        path: '/shippinginfo',
        name: 'ShippingInfo',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/ShippingInfo.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
