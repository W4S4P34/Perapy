<template>
  <div class="cart-list">
    <div v-if="cartList.length > 0" class="inner">
      <div v-for="item in cartList" v-bind:key="item.id">
        <CartSubmissionItem v-bind:data="item" v-on:remove="removeProduct" />
      </div>
    </div>
    <div v-else class="inner-alt">
      <img src="@/assets/empty_state.png" />
    </div>
  </div>
</template>

<script>
import CartSubmissionItem from "@/components/cart/CartSubmissionItem";
export default {
  name: "CartList",
  components: {
    CartSubmissionItem,
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList;
    },
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
  
  /* Size */
  width: 500px;
  height: inherit;
}
</style>
