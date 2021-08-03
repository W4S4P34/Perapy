<template>
  <div class="cart-list">
    <div class="inner">
      <div v-for="item in cartList" v-bind:key="item.id">
        <CartItem v-bind:data="item" v-on:remove="removeProduct" />
      </div>
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
          name: "Bicycle",
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
  width: 864px;
  height: 524px;
  @apply overflow-hidden;
}

.cart-list:hover {
  @apply overflow-y-auto;
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
</style>
