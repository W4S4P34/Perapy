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
        component: () => import(/* webpackChunkName: "product" */ '../view/ScreenPlaceholder.vue'),
        children: [
            {
                path: '',
                name: 'ProductList',
                component: () => import(/* webpackChunkName: "product" */ '../page/ProductList.vue')
            },
            {
                path: ':productId',
                name: 'ProductDetail',
                component: () => import(/* webpackChunkName: "product" */ '../page/ProductDetail.vue')
            },
            {
                path: 'cart',
                name: 'Cart',
                component: () => import(/* webpackChunkName: "shop" */ '../page/Cart.vue')
            },
            {
                path: 'shipping',
                name: 'Shipping',
                component: () => import(/* webpackChunkName: "shop" */ '../page/ShippingInfo.vue')
            }
        ]
    },
    {
        path: '/therapy',
        name: 'PetTherapy',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/PetList.vue')
    },
    {
        path: '/therapy/:petId',
        name: 'PetDetail',
        component: () => import(/* webpackChunkName: "therapy" */ '../page/PetDetail.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
