<template>
  <div class="product-list">
    <div v-for="item in list" v-bind:key="item.id">
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
  props: ['list'],
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
