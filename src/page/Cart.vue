<template>
  <div class="page-container">
    <div class="cart-info">
      <CartHeading>Cart</CartHeading>
      <CartList />
    </div>
    <CartSummary />
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
};
</script>

<style scoped>
.page-container {
  /* Flex */
  @apply flex flex-row;
}
</style>
