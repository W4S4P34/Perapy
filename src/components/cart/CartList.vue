<template>
  <div class="cart-list">
    <div v-if="cartList.length > 0" class="inner">
      <div v-for="item in cartList" v-bind:key="item.id">
        <CartItem v-bind:data="item"/>
      </div>
    </div>
    <div v-else class="inner-alt">
      <img src="@/assets/empty_state.png"/>
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
  computed: {
    cartList() {
      return this.$store.getters.cartList;
    }
  },
  methods: {
    removeProduct(id) {
      this.$store.dispatch("removeProduct", id);
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

  /* Size */
  width: 500px;
  height: inherit;
}
</style>
