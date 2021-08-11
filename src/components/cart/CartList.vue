<template>
  <div class="cart-list">
    <div v-if="cartList.length > 0" class="inner">
      <div v-for="item in cartList" v-bind:key="item.id">
        <CartItem v-bind:data="item" v-on:remove="removeProduct" />
      </div>
    </div>
    <div v-else class="inner-alt">
      <img src="../../assets/empty_state.png"/>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/cart/CartItem";
export default {
  name: "CartList",
  components: {
    CartItem,
  },
  data() {
    return {
      cartList: [
        {
          id: "p1",
          name: "Long Long Long Long Long Product Name",
          quantity: 3,
          price: 64,
        },
        {
          id: "p2",
          name: "Mjornir",
          quantity: 1,
          price: 2,
        },
        {
          id: "p3",
          name: "Zephyr",
          quantity: 69,
          price: 4,
        },
        {
          id: "p4",
          name: "Rick",
          quantity: 31,
          price: 14.77,
        },
        {
          id: "p5",
          name: "Rolled",
          quantity: 32,
          price: 114,
        },
      ],
    };
  },
  methods: {
    removeProduct(id) {
      console.log(id);
      const filteredList = this.cartList.filter((item) => {
        return item.id !== id;
      });
      console.log(filteredList);
      this.cartList = filteredList;
    },
  },
};
</script>

<style scoped>
/* Display */
.cart-list {
  @apply flex flex-col;

  /* Margin */
  @apply mb-16 ml-32;

  /* Size */
  width: 960px;
  height: 800px;
  @apply overflow-y-hidden;
}

.cart-list:hover {
  @apply overflow-y-auto;
}

.inner {
  /* Size */
  width: 900px;
  height: inherit;
}

.cart-list::-webkit-scrollbar {
  /* Width */
  width: 10px;
}

.cart-list::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 15px;
}

.cart-list::-webkit-scrollbar-thumb {
  background-color: rgba(196, 196, 196, 1);
  border-radius: 15px;
}

.inner-alt {
  /* Margin */
  @apply mt-20 ml-20;

  /* Text */
  @apply text-4xl font-semibold;
  color: rgba(217, 86, 86, 1);

  /* Size */
  width: 500px;
  height: inherit;
}
</style>
