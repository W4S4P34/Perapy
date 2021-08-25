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

  /* Margin */
  @apply mx-10 my-16;

  /* Padding */
  @apply px-7;

  /* Cusor */
  @apply cursor-pointer;
  @apply flex flex-row;

  /* Border */
  @apply border border-white;
  border-radius: 25px;

  /* Transition */
  @apply transition duration-300 ease-in-out;
}

.product-item:hover {
  /* Animation */
  @apply border border-gray-100;
  transform: translate(-4px, -4px);
  box-shadow: 7px 7px 10px 0px rgb(201, 201, 201);

}

.product-img {
  /* Display: Image content */
  @apply object-cover;

  /* Shape */
  @apply rounded-full;

  /* Layout */
  @apply w-36 h-52;
  @apply self-center;
}

.product-info {
  /* Display */
  @apply block;

  /* Padding */
  @apply px-4 py-10;

  /* Font */
  font-family: "Quicksand", sans-serif;
}

.product-name {
  /* Font */
  @apply text-lg font-bold;

  /* Margin */
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
