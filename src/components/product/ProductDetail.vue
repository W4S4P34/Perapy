<template>
  <div class="product-detail-container">
    <img
      class="product-img"
      src="https://i.pinimg.com/originals/8e/d2/34/8ed2347633e4dc68c4d709f16bd41ecc.jpg"
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
      <DetailInfo>Lorem ipsum</DetailInfo>
      <Button>Add to cart</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/reuseable-component/Button";
import DetailInfo from "@/components/reuseable-component/DetailInfo";

export default {
  name: "ProductDetail",
  data() {
    return {
      data: {
        name: "Loundraw",
        description: "Author",
        price: 69.42,
        numberRating: "12,345",
      },
    };
  },
  components: {
    Button,
    DetailInfo,
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

  /* Center crop */
  object-fit: none; /* Do not scale the image */
  object-position: center; /* Center the image within the element */

  /* Rounding */
  @apply rounded-full;
}

.product-info {
  /* Margin */
  @apply ml-16;

  /* Font */
  font-family: "Open Sans", sans-serif;
}

.product-name {
  /* Font style */
  @apply font-bold text-5xl;

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
</style>
