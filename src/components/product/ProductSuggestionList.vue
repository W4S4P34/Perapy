<template>
  <div class="product-list">
    <div v-for="item in productList" v-bind:key="item.id">
      <ProductSuggestionItem v-bind:data="item" />
    </div>
  </div>
</template>

<script>
import ProductSuggestionItem from "@/components/product/ProductSuggestionItem";
export default {
  name: "ProductSuggestionList",
  components: {
    ProductSuggestionItem,
  },
  data() {
    return {
      productList: [
        {
          id: "p1",
          name: "Bicycle",
          description: "A beautiful bicycle",
          rating: 4,
          price: 64,
        },
        {
          id: "p2",
          name: "Disc",
          description: "A beautiful disc",
          rating: 4,
          price: 645,
        },
        {
          id: "p3",
          name: "T-bag",
          description: "A beautiful t-bag",
          rating: 4,
          price: 68,
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-list {
  /* Flex */
  @apply grid grid-cols-3 gap-x-20;

  /* Margin */
  @apply mx-40;

  /* Padding */
  @apply pt-8;
}
</style>
