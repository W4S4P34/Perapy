<template>
  <a>
    <div class="product-item">
      <img
        class="product-img"
        src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1586998029-outward-hound-puzzle-cube-dog-toy.jpg?crop=0.899xw:1xh;center,top&resize=768:*"
      />
      <div class="product-info">
        <div class="product-name">
          {{ data.name }}
        </div>
        <div class="product-rating">
          <a><i class="fas fa-star"/></a>
          <div>{{ data.rating }}</div>
        </div>
        <div class="product-price">
          <a><i class="fas fa-dollar-sign"></i></a>
          <div>{{ data.price }}</div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["data"],
};
</script>

<style scoped>
.product-item {
  /* Size */
  width: 450px;
  height: 250px;

  /* Margin */
  @apply mx-20 my-16;

  /* Cusor */
  @apply cursor-pointer;

  @apply flex flex-row;
}

.product-img {
  /* Size */
  width: 200px;
  height: 250px;

  /* Center crop */
  object-fit: none; /* Do not scale the image */
  object-position: center; /* Center the image within the element */

  border-radius: 100px;
}

.product-info {
  /* Display */
  @apply block;

  /* Margin */
  @apply ml-4 my-auto;

  /* Font */
  font-family: "Open Sans", sans-serif;
}

.product-name {
  /* Font */
  @apply text-lg font-bold;
}

.product-rating {
  /* Font */
  @apply text-lg font-normal;

  /* Flex */
  @apply flex flex-row;
}

.product-rating div {
  @apply ml-2;
  @apply text-left;
}

.product-price {
  /* Font */
  @apply text-lg font-normal;

  /* Flex */
  @apply flex flex-row;

  /* Margin */
  @apply ml-1;
}

.product-price div {
  @apply ml-3;
  @apply text-left;
}
</style>
