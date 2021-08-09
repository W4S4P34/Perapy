<template>
  <div id="app" class="app">
    <Navbar/>
    <Toolbar/>
    <main class="content">
      <!-- <ProductDetail /> -->
      <cart-button/>
      <Cart/>
    </main>
    <Pagination/>
    <Footer />
  </div>
</template>


<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Cart from "./page/Cart.vue";
// import ProductDetail from "./page/ProductDetail.vue";
import CartButton from "./components/ui/CartButton.vue";
// import ProductList from "./page/ProductList.vue";
import Toolbar from './components/Toolbar.vue'
import Pagination from './components/Pagination.vue';

export default {
  components: {
    Navbar,
    Footer,
    // ProductDetail,
    Cart,
    // ProductList,
    CartButton,
    Toolbar, 
    Pagination
  },
};

</script>


<style scoped>

/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.app {
  @apply overflow-auto;
  @apply h-full;
}

/* SCROLL BAR */
::-webkit-scrollbar {
  width: 0.6rem;
  background-color: var(--scroll-bar-color);
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background-color: var(--scroll-thumb-color);
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--text-color-light);
}

.content {
  @apply mt-32;
}

</style>
