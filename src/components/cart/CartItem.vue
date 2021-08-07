<template>
  <div class="product-item">
    <div class="sub-container">
      <img
        class="product-img"
        src="https://cdn.filestackcontent.com/Krg875TyRVwr5OOumHAG/convert?cache=true&crop=126%2C64%2C1187%2C593&crop_first=true&quality=90&w=1920"
        alt="It's Rick Astley"
      />
      <RemoveButton v-on:click="onHandleRemoveProduct" />
    </div>

    <div class="product-name">
      {{ item.name }}
    </div>
    <div class="product-total-price">${{ totalPrice }}</div>
    <div class="quantity-container">
      <button class="decrease-btn" v-on:click="onHandleDecreasement">
        <span>-</span>
      </button>
      <div class="product-quantity">
        <span>
          {{ item.quantity }}
        </span>
      </div>
      <button class="increase-btn" v-on:click="onHandleIncreasement">
        <span>+</span>
      </button>
    </div>
  </div>
</template>

<script>
import RemoveButton from "../ui/RemoveButton.vue";

export default {
  name: "CartItem",
  props: ["data"],
  emits: ["remove"],
  components: {
    RemoveButton,
  },
  data() {
    return {
      item: { ...this.data },
    };
  },
  computed: {
    totalPrice() {
      return Math.round(this.item.quantity * this.item.price * 1000) / 1000;
    },
  },
  methods: {
    onHandleIncreasement() {
      this.item.quantity += 1;
    },
    onHandleDecreasement() {
      if (this.item.quantity === 0) {
        return;
      }
      this.item.quantity -= 1;
    },
    onHandleRemoveProduct() {
      this.$emit("remove", this.item.id);
    },
  },
};
</script>

<style scoped>
.product-item {
  /* Size */
  width: inherit;
  height: 156px;

  /* Grid */
  @apply grid grid-cols-6 gap-3;

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
  width: 140px;
  height: 140px;

  /* Center crop */
  object-fit: none;
  object-position: center;

  /* Border */
  border-radius: 25px;

  /* Display */
  @apply block justify-self-center self-center;
}

.product-name {
  /* Col-span */
  @apply col-span-2;
  /* Size */
  width: 330px;

  /* Wrapping */
  @apply overflow-ellipsis overflow-hidden break-words;

  /* Font */
  font-family: "Open Sans", sans-serif;
  @apply font-semibold text-2xl;

  /* Margin */
  @apply ml-5;

  /* Display */
  @apply block justify-center self-center;
}

.quantity-container {
  /* Display */
  @apply flex flex-row;
}

.decrease-btn,
.increase-btn {
  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply font-semibold text-black text-center;
  font-size: 30px;

  /* Size */
  @apply w-8 h-8;

  /* Border */
  border: 1px solid black;
  @apply rounded-full;

  /* Display */
  @apply inline-flex justify-center self-center items-center;

  /* Outline */
  @apply outline-none;
}
.decrease-btn span,
.increase-btn span {
  /* Size */
  @apply w-full;

  /* Alignment */
  @apply self-center text-center;
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
  /* Col-span */
  @apply col-span-2;
  /* Font */
  font-family: "Open Sans", sans-serif;
  @apply font-extrabold text-3xl;

  @apply block justify-self-center self-center;
}
</style>
