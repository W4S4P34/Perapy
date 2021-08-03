<template>
  <a>
    <div class="product-item">
      <img
        class="product-img"
        src="https://sunhouse.com.vn/pic/thumb/large/product/0(112).jpg"
      />
      <div class="product-info">
        <div class="product-name">
          {{ data.name }}
        </div>
        <div class="product-description">
          {{ data.description }}
        </div>
        <div class="product-price">${{ data.price }}</div>
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
  @apply m-auto;

  /* Font */
  font-family: "Open Sans", sans-serif;
}

.product-name {
  /* Font */
  @apply text-lg font-bold;
}

.product-description {
  /* Font */
  @apply text-sm font-normal;
}

.product-price {
  /* Font */
  @apply text-lg font-bold;
}
</style>
