<template>
  <div id="app" class="app">
    <Navbar />
    <main class="content">
      <pet-request-list />
    </main>
    <Footer />
  </div>
</template>


<script>

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
// import Cart from "./page/Cart.vue";
// import ProductDetail from "./page/ProductDetail.vue";
// import ProductList from "./page/ProductList.vue";
import PetRequestList from './components/petinfo/PetRequestList.vue'
// import PetRequestCard from './components/petinfo/PetRequestCard.vue'

export default {
  components: {
    Navbar,
    Footer,
    // ProductDetail,
    // Cart,
    // ProductList,
    PetRequestList
    // PetRequestCard
  }
};

</script>


<style scoped>

/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

.app {
  @apply overflow-auto;
}

.content {
  @apply mt-32;
}

</style>
