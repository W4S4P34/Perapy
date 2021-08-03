<template>
  <div class="cart-btn">
    <i class="fas fa-shopping-cart cart-icon" />
  </div>
</template>

<script>
import debounce from "lodash.debounce";
export default {
  name: "CartButton",
  created() {
    this.handleDebounceScroll = debounce(this.changeButtonDisplay, 100);
    document.addEventListener("scroll", this.changeButtonDisplay);
  },
  beforeUnmount() {
    document.removeEventListener("scroll", this.changeButtonDisplay);
  },
  methods: {
    changeButtonDisplay() {
      const button = document.querySelector(".cart-btn");
      const footer = document.querySelector(".footer");
      const rectTop = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top;
      };

      if (
        rectTop(button) + document.body.scrollTop + button.offsetHeight >=
        rectTop(footer) + document.body.scrollTop - 32
      ) {
        button.style.position = "absolute";
        button.style.bottom = "-192px";
      }
      if (
        document.body.scrollTop + window.innerHeight <
        rectTop(footer) + document.body.scrollTop
      ) {
        button.style.position = "fixed";
        button.style.bottom = "0px";
      }
    },
  },
};
</script>

<style scoped>
.cart-btn {
  /* Position */
  @apply fixed;
  @apply bottom-0 right-0;

  /* Margin */
  @apply mb-8 mr-8;

  /* Sizing */
  width: 64px;
  height: 64px;

  /* Background */
  background-color: rgba(136, 96, 208, 1);

  /* Rounded */
  @apply rounded-full;

  /* Box Shadow */
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);

  /* Z-index */
  z-index: 999px;

  /* Cursor */
  @apply cursor-pointer;
}

.cart-icon {
  /* Sizing */
  width: 32px;
  height: 32px;

  /* Color */
  @apply text-white;

  /* Margin */
  @apply mt-4 mr-1; /* Temporary */
}
</style>
