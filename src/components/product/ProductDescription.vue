<template>
  <div class="product-description" v-html="handleContent">
  </div>
</template>

<script>
export default {
  name: "ProductDescription",
  props: ["info"],
  data() {
    return {
      description: this.info.longDescription,
      ingredients: this.info.ingredients,
    };
  },
  computed: {
    handleContent() {
      return this.ingredients
        ? `<div>${this.description}</div>
        <div>${this.ingredients}</div>`
        : `<div>${this.description}</div>`;
    },
  },
};
</script>

<style scoped>
.product-description {
  /* Margin */
  @apply ml-56 my-10;

  /* Width */
  width: 1250px;

  /* Font */
  font-family: "Open Sans", sans-serif;
  @apply text-lg;
}
</style>
