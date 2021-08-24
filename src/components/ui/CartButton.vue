<template>
  <button class="cart-btn" @click="navigate">
    <div class="badge">{{ totalAmount }}</div>
    <i class="fas fa-shopping-cart cart-icon" />
  </button>
</template>

<script>
import debounce from "lodash.debounce";
export default {
  name: "CartButton",
  data() {
    return {
      isPositionAbsolute: false,
    };
  },
  created() {
    this.handleDebounceScroll = debounce(this.changeButtonDisplay, 100);
    document.addEventListener("scroll", this.changeButtonDisplay);
  },
  beforeUnmount() {
    document.removeEventListener("scroll", this.changeButtonDisplay);
  },
  methods: {
    getPageHeight() {
      let pageHeight = 0;
      const findHighestNode = (nodesList) => {
        for (let i = nodesList.length - 1; i >= 0; i--) {
          if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
            let elHeight = Math.max(
              nodesList[i].scrollHeight,
              nodesList[i].clientHeight
            );
            pageHeight = Math.max(pageHeight, elHeight);
          }
          if (nodesList[i].childNodes.length) {
            findHighestNode(nodesList[i].childNodes);
          }
        }
      };

      findHighestNode(document.documentElement.childNodes);
      return pageHeight;
    },
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
        if (this.isPositionAbsolute === false) {
          this.isPositionAbsolute = true;
          button.style.position = "absolute";
          button.style.bottom = `${rectTop(button) +
            document.body.scrollTop +
            button.offsetHeight -
            (rectTop(footer) + document.body.scrollTop - 32)}px`;
        }
      }
      if (
        document.body.scrollTop + window.innerHeight <
        rectTop(footer) + document.body.scrollTop
      ) {
        this.isPositionAbsolute = false;
        button.style.position = "fixed";
        button.style.bottom = "0px";
      }
    },
    navigate() {
      this.$router.push({ name: "Cart" });
    },
  },
  computed: {
    totalAmount() {
      return this.$store.state.totalQuantity;
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
  background-color: rgba(86, 128, 233, 1);

  /* Rounded */
  @apply rounded-full;

  /* Box Shadow */
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);

  /* Z-index */
  z-index: 999px;

  /* Cursor */
  @apply cursor-pointer;

  /* Transition */
  transition: background-color 0.2s;
}

.cart-btn:hover {
  /* Background */
  background-color: rgba(67, 110, 217, 1);
}

.cart-icon {
  /* Sizing */
  width: 32px;
  height: 32px;

  /* Color */
  @apply text-white;

  @apply mr-1 mt-1;
}

.badge {
  /* Size */
  width: 28px;
  height: 28px;

  /* Position */
  @apply absolute;
  @apply -right-2 -top-2;

  /* Line height */
  line-height: 28px;

  /* Rounded */
  @apply rounded-full;

  /* Centering */
  @apply self-center text-center;

  /* Font */
  @apply text-white;
  font-family: "Quicksand", sans-serif;

  /* Background */
  background-color: rgba(136, 96, 208, 1);
}
</style>
