import { createStore } from 'vuex'

const store = createStore({
    state: {
        cartList: [],
        totalQuantity: 0,
        changed: false,
    },

    getters: {
        cartList: state => {
            if (state.cartList.length === 0) {
                console.log("Blank");
            }
            return state.cartList;
        },

        changed: state => {
            return state.changed;
        },

        productInfo: (state) => {
            return (productId) => {
                const product = state.cartList.find(item => item.id === productId)
                return [product.quantity, product.totalPrice];
            }
        }
    },

    // Mutations used to change state
    mutations: {
        addProduct(state, newProduct) {
            // Check if added product is existed

            const existingProduct = state.cartList.find(item => item.id === newProduct.id);
            if (!existingProduct) {
                state.cartList.push({
                    id: newProduct.id,
                    thumbnail: newProduct.thumbnail,
                    name: newProduct.name,
                    price: newProduct.price,
                    quantity: 1,
                    totalPrice: newProduct.price
                });
                state.totalQuantity++;
                state.changed = true;
            }
            else {
                existingProduct.totalPrice = Math.round((existingProduct.totalPrice + existingProduct.price) * 100) / 100;
                existingProduct.quantity++;
            }
        },

        removeProduct(state, removeProductId) {

            state.cartList = state.cartList.filter(product => product.id !== removeProductId);
            state.totalQuantity--;
            state.changed = true;
        },

        increaseProductQuantity(state, increasedProductId) {
            const existingProduct = state.cartList.find(item => item.id === increasedProductId);
            existingProduct.quantity++;
            existingProduct.totalPrice = Math.round((existingProduct.totalPrice + existingProduct.price) * 100) / 100;
            state.change = true;
        },

        decreaseProductQuantity(state, decreasedProductId) {

            const existingProduct = state.cartList.find(item => item.id === decreasedProductId);
            if (existingProduct.quantity === 1) {
                state.cartList = state.cartList.filter(item => item.id !== decreasedProductId);
                state.totalQuantity--;
            }
            else {
                existingProduct.quantity--;
                existingProduct.totalPrice = Math.round((existingProduct.totalPrice - existingProduct.price) * 100) / 100;
            }
            state.changed = true;
        }

    },

    // Actions used to call mutations
    actions: {
        addProductToCart(context, product) {
            context.commit('addProduct', product);
        },

        removeProduct(context, productId) {
            context.commit('removeProduct', productId);
        },

        increaseProductQuantity(context, productId) {
            context.commit('increaseProductQuantity', productId);
        },

        decreaseProductQuantity(context, productId) {
            context.commit('decreaseProductQuantity', productId);
        }
    }

})

export default store