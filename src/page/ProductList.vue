<template>
  <div>
    <Searchbar />
    <ProductList />
    <Pagination />
    <CartButton />
  </div>
</template>

<script>
import ProductList from "@/components/product/ProductList";
import Searchbar from "@/components/Toolbar";
import Pagination from "@/components/Pagination";
import CartButton from "@/components/ui/CartButton";
export default {
  name: "Product",
  components: {
    ProductList,
    Searchbar,
    Pagination,
    CartButton,
  },
};
</script>

<style scoped></style>
