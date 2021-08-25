<template>
  <a @click="navigate">
    <div class="product-item">
      <img class="product-img" :src="product.thumbnail" />
      <div class="product-info">
        <div class="product-name">
          {{ product.name }}
        </div>
        <div class="product-rating">
          <a><i class="fas fa-star"/></a>
          <div>{{ product.rating }}</div>
        </div>
        <div class="product-price">
          <a><i class="fas fa-dollar-sign"></i></a>
          <div>{{ product.price }}</div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "ProductItem",
  props: ["data"],
  data: function() {
    return {
      product: this.data,
    };
  },
  methods: {
    navigate() {
      this.$router.push({name: 'ProductDetail', params: {productId: this.product.id}})
    }
  }
};
</script>

<style scoped>
.product-item {
  /* Size */
  width: 450px;
  height: 250px;

  /* Margin
  @apply mx-10 my-16; */

  /* Cusor */
  @apply cursor-pointer;

  @apply flex flex-row;

  /* Animation */
  @apply transition duration-700 ease-in-out;
}

.product-item img {
  /* Animation */
  @apply transition duration-700 ease-in-out;
}

.product-item:hover {
   /* Animation */
  transform: translate(-3px, -3px);

  /* Cursor */
  cursor: pointer;
}

.product-item:hover img {
   /* Animation */
  box-shadow: 7px 7px 10px grey;
}

.product-img {
  /* Size */
  width: 200px;
  height: 250px;

  border-radius: 100px;
}

.product-info {
  /* Display */
  @apply block;

  /* Margin */
  @apply ml-4 my-auto;

  /* Font */
  font-family: "Quicksand", sans-serif;
}

.product-name {
  /* Font */
  @apply text-lg font-bold;

  @apply mb-2;
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