<template>
    <div class="page-container">
      <ProductDetail />
      <Heading>You might Also like</Heading>
      <Container><ProductSuggestionList/></Container>
    </div>
</template>

<script>
import ProductDetail from "@/components/product/ProductDetail";
import Container from '@/components/reuseable-component/Container'
import Heading from '@/components/reuseable-component/Heading'
import ProductSuggestionList from '@/components/product/ProductSuggestionList'

export default {
  name: 'ProductDetailPage',
  components: {
    ProductDetail,
    Heading,
    Container,
    ProductSuggestionList,
  },
};
</script>

<style scoped>

</style>
