<template>
  <div class="product-item">
    <img
      class="product-img"
      src="https://cdn.filestackcontent.com/Krg875TyRVwr5OOumHAG/convert?cache=true&crop=126%2C64%2C1187%2C593&crop_first=true&quality=90&w=1920"
      alt="It's Rick Astley"
    />
    <div class="product-name">
      {{ item.name }}
    </div>
    <div class="quantity-container">
      <button class="decrease-btn" v-on:click="onHandleDecreasement">
        -
      </button>
      <div class="product-quantity">
        <span>
          {{ item.quantity }}
        </span>
      </div>
      <button class="increase-btn" v-on:click="onHandleIncreasement">
        +
      </button>
    </div>
    <div class="product-total-price">${{ totalPrice }}</div>
    <button class="remove-btn" v-on:click="onHandleRemoveProduct">
      <span>Remove</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: ["data"],
  emits: ['remove'],
  data() {
    return {
      item: { ...this.data },
    };
  },
  computed: {
    totalPrice() {
      return this.item.quantity * this.item.price;
    },
  },
  methods: {
    onHandleIncreasement() {
      if (this.item.quantity === 0) {
        return;
      }

      this.item.quantity += 1;
    },
    onHandleDecreasement() {
      if (this.item.quantity === 0) {
        return;
      }
      this.item.quantity -= 1;
    },
    onHandleRemoveProduct() {
        this.$emit('remove', this.item.id);
    }
  },
};
</script>

<style scoped>
.product-item {
  /* Size */
  width: 820px;
  height: 200px;

  /* Grid */
  @apply grid grid-cols-4 grid-rows-3;

  @apply my-11;

  /* Position */
  @apply relative;
}

.product-img {
  /* Grid */
  @apply row-span-3;
  /* Size */
  width: 200px;
  height: 200px;

  /* Center crop */
  object-fit: none;
  object-position: center;

  /* Border */
  border-radius: 25px;
}

.product-name {
  /* Size */
  width: 350px;

  /* Display */
  @apply col-span-3 col-start-2 row-start-1;

  /* Wrapping */
  @apply overflow-ellipsis overflow-hidden;

  /* Font */
  font-family: "Open Sans", sans-serif;
  @apply font-semibold text-5xl;

  /* Margin */
  @apply ml-5;
}

.quantity-container {
  /* Display */
  @apply flex flex-row;

  /* Margin */
  @apply ml-5;
}

.decrease-btn,
.increase-btn {
  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply font-semibold text-black text-center;
  font-size: 30px;

  /* Size */
  @apply w-6 h-6;

  /* Border */
  border: 1px solid black;
  @apply rounded-full;

  /* Display */
  @apply inline-flex justify-center items-center;

  /* Outline */
  @apply outline-none;
}

.product-quantity {
  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply font-semibold text-black text-center;
  font-size: 16px;

  /* Size */
  width: 74px;
  height: 28px;

  /* Border */
  border: 1px solid black;
  border-radius: 15px;

  /* Display */
  @apply inline-flex justify-items-center;

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
  /* Display */
  @apply col-start-4 row-start-1;

  /* Font */
  font-family: "Open Sans", sans-serif;
  @apply font-bold text-3xl;

  /* Position */
  @apply absolute top-3 right-0;
}

.remove-btn {
  /* Size */
  width: 125px;
  height: 40px;

  /* Font */
  font-family: "Open Sans" sans-serif;
  @apply font-semibold text-lg text-white;

  /* Display */
  @apply col-start-4 row-start-3;

  /* Background */
  background-color: rgba(86, 128, 217, 1);

  /* Border */
  border-radius: 25px;

  /* Position */
  @apply absolute right-0 bottom-0;
}
</style>
