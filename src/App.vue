<template>
  <div id="app" class="app">
    <Navbar />
    <main class="content">
      <router-view :key="$route.fullPath"></router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/nav-footer/Navbar.vue";
import Footer from "./components/nav-footer/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap%22");

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
  @apply mt-24;
}
</style>
