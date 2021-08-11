<template>
  <div class="page-container">
    <div class="cart-info">
      <CartHeading>Cart</CartHeading>
      <CartSubmissionList />
    </div>
    <ShippingForm />
  </div>
</template>

<script>
import CartHeading from "@/components/cart/CartHeading";
import CartSubmissionList from "@/components/cart/CartSubmissionList";
import ShippingForm from "@/components/cart/ShippingForm";
export default {
  name: "ShippingInfoPage",
  components: {
    CartHeading,
    CartSubmissionList,
    ShippingForm,
  },
};
</script>

<style scoped>
.page-container {
  /* Flex */
  @apply flex flex-row;
}
</style>
