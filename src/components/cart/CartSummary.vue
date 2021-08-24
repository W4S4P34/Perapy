<template>
  <div class="summary-form">
    <h1 class="heading">Summary</h1>
    <div class="summary-content">
      <div class="cart-price">
        <span class="label">Cart Price</span>
        <span class="price">${{ calculateTotal }}</span>
      </div>
      <div class="cart-price">
        <span class="label">Shipping Fee</span>
        <span class="price">${{shippingFee}}</span>
      </div> 
      <div class="divider"></div>
      <div class="total-price">
        <span class="label">Total</span>
        <span class="price">${{calculateTotal + shippingFee}}</span>
      </div>
    </div>
    <button type="submit" class="checkout-button" @click="navigate">
      Checkout
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    navigate() {
      this.$router.push({ name: "Shipping" });
    },
  },
  data() {
    return {
      shippingFee: 1,
    };
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList;
    },
    calculateTotal() {
      return Math.round(this.cartList.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity;
      }, 0) * 100) / 100 
    },
  },
};
</script>

<style scoped>
.summary-form {
  /* Background */
  @apply bg-gray-300;

  /* Size */
  width: 543px;
  height: 482px;

  /* Margin */
  @apply ml-28 my-20;

  /* Corner */
  @apply rounded-3xl;

  /* Padding */
  @apply p-10;

  /* Position */
  @apply relative;
}

.heading {
  /* Font */
  font-family: "Quicksand", sans-serif;

  /* Size */
  @apply text-4xl font-bold;

  /* Position */
  @apply text-center;
}

.summary-content {
  /* Margin */
  @apply mt-14;
}

.cart-price {
  /* Grid */
  @apply grid grid-cols-2;

  /* Font */
  font-family: "Quicksand", sans-serif;

  /* Size */
  @apply text-2xl;

  /* Margin */
  @apply mb-6;
}

.divider {
  /* Divide */
  border-bottom: 1px solid;

  /* Width */
  @apply w-full;
}

.total-price {
  /* Grid */
  @apply grid grid-cols-2;

  /* Font */
  font-family: "Quicksand", sans-serif;

  /* Font weight */
  @apply font-semibold;

  /* Size */
  @apply text-2xl;

  /* Margin */
  @apply mt-8 mb-14;

  /* Color */
  @apply text-blue-500;
}

.label {
  /* Alignment */
  @apply text-left;
}

.price {
  /* Alignment */
  @apply text-right;
}

.checkout-button {
  /* Position */
  @apply absolute;

  /* Alignment */
  right: 0;

  /* Margin */
  @apply mr-10;

  /* Font */
  font-family: "Quicksand", sans-serif;

  /* Text size */
  @apply text-xl font-bold;

  /* Color */
  @apply text-white;

  /* Border */
  @apply border border-blue-500 rounded-3xl;

  /* Background */
  @apply bg-blue-500;

    /* Padding */
    @apply py-4 px-8;

    /* Transition */
    transition: 0.2s;
}

.checkout-button:hover {
    /* Background Hover */
    @apply bg-gray-400;

    /* Border Hover */
    @apply border-gray-400;
}

.fade-enter-active, .fade-leave-active {
    /* Transition */
    @apply transition-opacity;
}

.fade-enter, .fade-leave-active {
    /* Opacity */
    opacity: 0;
}
</style>
