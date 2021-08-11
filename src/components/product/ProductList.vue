<template>
  <div class="product-list">
    <div v-for="item in productList" v-bind:key="item.id">
      <ProductItem v-bind:data="item" />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/product/ProductItem";
import productData from "@/assets/data/product.json";

export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  data() {
    return {
      productList: productData,
    };
  },
};
</script>

<style scoped>
.product-list {
  /* Flex */
  @apply grid grid-cols-3 gap-x-20 gap-y-40;

  /* Margin */
  @apply mx-40;
}
</style>
