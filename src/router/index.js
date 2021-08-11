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
        path: '/product/productx',
        name: 'Product Detail',
        component: () => import(/* webpackChunkName: "product" */ '../page/ProductDetail.vue')
    },
    {
        path: '/therapy',
        name: 'Pet Therapy',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/PetList.vue')
    },
    {
        path: '/therapy/petx',
        name: 'Pet Detail',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/PetDetail.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/Cart.vue')
    },
    {
        path: '/shippinginfo',
        name: 'Shipping Info',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/ShippingInfo.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
