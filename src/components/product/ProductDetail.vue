<template>
  <div class="product-detail-container">
    <img
      class="product-img"
      :src="data.thumbnail"
    />
    <div class="product-info">
      <div class="product-name">
        {{ data.name }}
      </div>
      <div class="product-description">
        {{ data.description }}
      </div>
      <div class="product-rating">
        <div class="star-rating">
          <a><i class="fas fa-star"/></a>
          <a><i class="fas fa-star"/></a>
          <a><i class="fas fa-star"/></a>
          <a><i class="fas fa-star"/></a>
          <a><i class="fas fa-star"/></a>
        </div>
        <div class="number-rating">
          {{ data.numberRating }}
        </div>
      </div>
      <div class="product-price">${{ data.price }}</div>
      <Button :class="addToCart" @click="demo">Add to cart</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/reuseable-component/Button";

export default {
  name: "ProductDetail",
  props: ['info'],
  data() {
    return {
      data: this.info,
    };
  },
  components: {
    Button,
  },
  computed: {
    addToCart() {
      return 'add-to-cart'
    }
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

.product-name {
  /* Font style */
  @apply font-bold text-4xl;

  /* Margin */
  @apply my-2;
}

.product-description {
  /* Font style */
  @apply font-bold text-2xl;

  /* Margin */
  @apply mb-2;
}

.product-rating {
  /* Display */
  @apply flex flex-row;

  /* Margin */
  @apply mb-2;
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
  @apply mb-2;
}

.add-to-cart {
  @apply relative left-0;
}
</style>
