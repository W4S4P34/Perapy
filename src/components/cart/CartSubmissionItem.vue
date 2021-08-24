<template>
  <div class="product-item">
    <div class="sub-container">
      <img
        class="product-img"
        :src="item.thumbnail"
      />
    </div>
    <div class="product-name">
      {{ item.name }}
    </div>
    <div class="product-total-price">${{ item.totalPrice }}</div>
    <div class="quantity-container">
      <span>Quantity</span>
      <div class="product-quantity">
        <span>
          {{ item.quantity }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["data"],
  emits: ["remove"],
  data() {
    return {
      item: { ...this.data },
    };
  },
};
</script>

<style scoped>
.product-item {
  /* Size */
  width: 940px;
  height: 134px;

  /* Grid */
  display: grid;
  grid-template-columns: 140px 340px 200px 180px;

  /* Margin */
  @apply my-11;

  /* Position */
  @apply relative;
}

.sub-container {
  @apply relative;
}

.product-img {
  /* Size */
  width: 120px;
  height: 120px;

  /* Border */
  border-radius: 25px;

  /* Display */
  @apply block justify-self-center self-center;
}

.product-name {
  /* Size */
  width: 330px;

  /* Wrapping */
  @apply overflow-ellipsis overflow-hidden break-words;

  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply font-semibold text-xl;

  /* Margin */
  @apply ml-5;

  /* Display */
  @apply block justify-center self-center;
}

.quantity-container {
  /* Display */
  @apply flex flex-row self-center;

  /* Placing */
  @apply col-start-4 row-start-1;
}

.quantity-container span {
    /* Font */
    font-family: 'Quicksand', sans-serif;
    @apply font-semibold text-lg;
}

.product-quantity {
  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply font-semibold text-black text-center;
  font-size: 16px;

  /* Size */
  width: 64px;
  height: 24px;

  /* Border */
  border: 1px solid black;
  border-radius: 15px;

  /* Display */
  @apply inline-flex justify-items-center self-center;

  /* Cursor */
  @apply cursor-default;

  /* Margin */
  @apply mx-3;

  /* Position */
  @apply relative;
}

.product-quantity span {
  /* Size */
  @apply w-full;

  /* Alignment */
  @apply self-center text-center;
}

.product-total-price {
  /* Starting point */
  @apply col-start-3 row-start-1;
  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply font-bold text-2xl;

  @apply block justify-self-center self-center;
}
</style>
