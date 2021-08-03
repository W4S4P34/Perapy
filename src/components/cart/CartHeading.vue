<template>
  <h1 class="cart-heading">
    <slot>Default</slot>
  </h1>
</template>

<script>
export default {
  name: "CartHeading",
};
</script>

<style scoped>
.cart-heading {
  /* Font */
  font-family: "Open Sans", sans-serif;
  @apply font-bold text-6xl;

  /* Margin */
  @apply ml-32 mb-6;
}
</style>
