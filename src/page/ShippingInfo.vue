<template>
  <div class="page-container">
    <CartHeading>Cart</CartHeading>
    <CartSubmissionList />
  </div>
</template>

<script>
import CartHeading from "@/components/cart/CartHeading";
import CartSubmissionList from "@/components/cart/CartSubmissionList";
export default {
  name: "ShippingInfoPage",
  components: {
    CartHeading,
    CartSubmissionList,
  },
};
</script>

<style scoped></style>
