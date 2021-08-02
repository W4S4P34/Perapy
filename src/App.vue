<template>
  <div id="app" class="app">
    <Navbar/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar, Footer
  },
};
</script>


<style scoped>

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.app {
  @apply text-center;
}
</style>
