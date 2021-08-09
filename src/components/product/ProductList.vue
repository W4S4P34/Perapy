<template>
  <div class="product-list">
    <div v-for="item in productList" v-bind:key="item.id">
      <ProductItem v-bind:data="item" />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/product/ProductItem";
export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  data() {
    return {
      productList: [
        {
          id: "p1",
          name: "Bicycle",
          rating: 5,
          price: 64,
        },
        {
          id: "p2",
          name: "Disc",
          rating: 5,
          price: 645,
        },
        {
          id: "p3",
          name: "T-bag",
          rating: 5,
          price: 69,
        },
        {
          id: "p4",
          name: "Long Long Long Long Long Long Long Long Long Product Name",
          rating: 5,
          price: 64,
        },
        {
          id: "p5",
          name: "Disc",
          rating: 5,
          price: 645,
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-list {
  /* Flex */
  @apply flex flex-row flex-wrap;

  /* Margin */
  @apply mt-24 mb-20 ml-8;
}
</style>
