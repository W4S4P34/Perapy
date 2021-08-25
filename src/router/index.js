import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "placeholder" */ '../page/Placeholder.vue'),
        meta: {
            title: "Home",
        }
    },
    {
        path: '/services',
        name: 'Services',
        component: () => import(/* webpackChunkName: "placeholder" */ '../page/Placeholder.vue'),
        meta: {
            title: "Services",
        }
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "product" */ '../view/ScreenPlaceholder.vue'),
        meta: {
            title: "Products",
        },
        children: [
            {
                path: '',
                name: 'ProductList',
                component: () => import(/* webpackChunkName: "product" */ '../page/ProductList.vue'),
            },
            {
                path: ':productId',
                name: 'ProductDetail',
                component: () => import(/* webpackChunkName: "product" */ '../page/ProductDetail.vue'),
            },
            {
                path: 'cart',
                name: 'Cart',
                component: () => import(/* webpackChunkName: "shop" */ '../page/Cart.vue'),
                meta: {
                    title: "Cart",
                },
            },
            {
                path: 'shipping',
                name: 'Shipping',
                component: () => import(/* webpackChunkName: "shop" */ '../page/ShippingInfo.vue'),
                meta: {
                    title: "Shipping",
                },
            }
        ]
    },
    {
        path: '/therapy',
        name: 'PetTherapy',
        component: () => import(/* webpackChunkName: "therapy" */ '../view/ScreenPlaceholder.vue'),
        meta: {
            title: "Pet Therapy",
        },
        children: [
            {
                path: ':petId',
                name: 'PetDetail',
                component: () => import(/* webpackChunkName: "therapy" */ '../page/PetDetail.vue'),
            },
            {
                path: '',
                name: 'PetList',
                component: () => import(/* webpackChunkName: "therapy" */ '../page/PetList.vue'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
    // `/nested`'s will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) {
        let title = nearestWithTitle.meta.title;
        document.title = title;
    } else if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});

export default router
