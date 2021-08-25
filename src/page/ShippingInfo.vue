<template>
  <div class="page-container">
    <Modal v-if="isOpen" @confirm="closingModal" :hideCancelBtn="true"
      >Your order is submitted, please check the information in the order
      information.</Modal
    >
    <div class="cart-info">
      <CartHeading>Cart</CartHeading>
      <CartSubmissionList />
    </div>
    <ShippingForm @buy="showModal" />
  </div>
</template>

<script>
import CartHeading from "@/components/cart/CartHeading";
import CartSubmissionList from "@/components/cart/CartSubmissionList";
import ShippingForm from "@/components/cart/ShippingForm";
import Modal from "@/components/reuseable-component/Modal";
export default {
  name: "ShippingInfoPage",
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    CartHeading,
    CartSubmissionList,
    ShippingForm,
    Modal,
  },
  methods: {
    closingModal() {
      this.isOpen = !this.isOpen;
      this.$store.dispatch("clearCart");
    },
    showModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.page-container {
  /* Flex */
  @apply flex flex-row;
}
</style>
