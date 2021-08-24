<template>
  <div class="product-list">
    <div v-for="product in products" v-bind:key="product.id">
      <ProductItem v-bind:data="product" />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/product/ProductItem";
// import productData from "@/assets/data/product.json";

export default {
  name: "ProductList",
  props: ["products"],
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
.product-list {
  /* Flex */
  @apply grid grid-cols-3 gap-x-20 gap-y-20;

  /* Margin */
  @apply mx-40;
}
</style>
