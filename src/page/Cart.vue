<template>
  <div class="page-container">
    <div class="cart-info">
      <CartHeading>Cart</CartHeading>
      <CartList/>
    </div>
    <CartSummary/>
  </div>
</template>

<script>
import CartHeading from "@/components/cart/CartHeading";
import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";
export default {
  name: "CartPage",
  components: {
    CartHeading,
    CartList,
    CartSummary,
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
};
</script>

<style scoped>
.page-container {
  /* Flex */
  @apply flex flex-row;
}
</style>
