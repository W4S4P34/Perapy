<template>
  <div>
    <Searchbar />
    <ProductList v-bind:products="this.pageOfProducts" />
    <pagination
      :total-pages="totalPages"
      :total="total"
      :per-page="perPage"
      :current-page="currentPage"
      @pagechanged="onPageChange"
    />
    <CartButton />
  </div>
</template>

<script>
import ProductList from "@/components/product/ProductList";
import Searchbar from "@/components/ui/Toolbar";
import Pagination from "@/components/ui/Pagination-2";
import CartButton from "@/components/ui/CartButton";
import ProductData from "@/assets/data/product.json";

export default {
  name: "Product",
  components: {
    ProductList,
    Searchbar,
    Pagination,
    CartButton,
  },
  data() {
    return {
      currentPage: 0,
      perPage: 0,
      total: 0,
      totalPages: 0,
      productList: ProductData,
      pageOfProducts: [],
    };
  },
  created() {
    this.currentPage = 1;
    this.perPage = 12;
    this.total = this.productList.length;
    this.paginator(this.productList, this.currentPage, this.perPage);
  },

  methods: {
    onPageChange(page) {
      this.currentPage = page;
      this.paginator(this.productList, this.currentPage, this.perPage);
    },
    paginator(items, current_page, per_page_items) {
      let page = current_page || 1,
        per_page = per_page_items || 10,
        offset = (page - 1) * per_page,
        paginatedItems = items.slice(offset).slice(0, per_page_items),
        total_pages = Math.ceil(items.length / per_page);

      this.currentPage = page;
      this.perPage = per_page;
      this.total = items.length;
      this.totalPages = total_pages;
      this.pageOfProducts = paginatedItems;
      console.log(this.pageOfProducts);
    },
  },
};
</script>

<style scoped></style>
