<template>
  <div>
    <Modal v-if="isOpen" @confirm="closingModal" :hideCancelBtn="true"
      >Product has been added into your cart.</Modal
    >
    <div class="product-detail-container">
      <img class="product-img" :src="data.thumbnail" />
      <div class="product-info">
        <div class="product-name">
          {{ data.name }}
        </div>
        <div class="product-description">
          {{ data.description }}
        </div>
        <div class="product-rating">
          <div class="star-rating">
            <star-rating
              v-bind:increment="0.5"
              v-bind:rating="data.aveRating"
              v-bind:max-rating="5"
              v-bind:show-rating="false"
              v-bind:read-only="true"
              border-color="#000"
              border-active-color="#000"
              active-color="#000"
              v-bind:star-size="20"
            >
            </star-rating>
          </div>
          <div class="number-rating">
            {{ data.aveRating }}
          </div>
        </div>
        <div class="product-price">${{ data.price }}</div>
        <Button :class="addToCart" @click="addProductToCart"
          >Add to cart</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/reuseable-component/Button";
import StarRating from "vue-star-rating";
import Modal from "@/components/reuseable-component/Modal";

export default {
  name: "ProductDetail",
  props: ["info"],
  data() {
    return {
      data: this.info,
      isOpen: false,
    };
  },
  components: {
    Button,
    StarRating,
    Modal,
  },
  methods: {
    addProductToCart() {
      const product = {
        id: this.data.id,
        thumbnail: this.data.thumbnail,
        name: this.data.name,
        price: this.data.price,
      };
      this.$store.dispatch("addProductToCart", product);
      this.isOpen = !this.isOpen;
    },
    closingModal() {
      this.isOpen = !this.isOpen;
    },
  },
  computed: {
    addToCart() {
      return "add-to-cart";
    },
  },
};
</script>

<style scoped>
.product-detail-container {
  /* Size */
  width: 1336px;
  height: 540px;

  /* Margin */
  @apply mx-auto my-16;

  /* Display */
  @apply flex flex-row;

  /* Position */
  @apply relative;
}

.product-name {
  /* Font style */
  @apply font-bold text-4xl;

  /* Margin */
  @apply my-4;
}

.product-img {
  /* Size */
  width: 540px;
  height: 540px;

  /* Rounding */
  @apply rounded-full;
}

.product-info {
  /* Margin */
  @apply ml-16;

  /* Font */
  font-family: "Quicksand", sans-serif;
}

.product-description {
  /* Font style */
  @apply font-bold text-2xl;

  /* Margin */
  @apply mb-4;
}

.product-rating {
  /* Display */
  @apply flex flex-row;

  /* Margin */
  @apply mb-4;
}

.star-rating {
  /* Margin */
  @apply mr-1;
}

.star-rating a {
  /* Margin */
  @apply mr-1;
}

.number-rating {
  /* Font style */
  @apply font-bold text-lg;
}

.product-price {
  /* Font style */
  @apply font-bold text-3xl;

  /* Margin */
  @apply mb-4;
}

.add-to-cart {
  @apply relative left-0;
}
</style>
