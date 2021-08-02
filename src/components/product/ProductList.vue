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
          description: "A beautiful bicycle",
          price: 64,
        },
        {
          id: "p2",
          name: "Disc",
          description: "A beautiful disc",
          price: 645,
        },
        {
          id: "p3",
          name: "T-bag",
          description: "A beautiful t-bag",
          price: 69,
        },
        {
          id: "p4",
          name: "Dancin'",
          description: "A beautiful dancer",
          price: 12,
        },
        {
          id: "p5",
          name: "WTF",
          description: "A beautiful swear",
          price: 132,
        },
        {
          id: "p6",
          name: "Boog",
          description: "A beautiful boog",
          price: 420,
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
