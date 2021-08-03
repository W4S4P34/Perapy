<template>
  <button class="button">
    <slot>Default</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
.button {
  /* Font */
  font-family: "Open Sans", sans-serif;
  @apply font-bold text-2xl text-white;

  /* Background */
  background-color: rgba(136, 96, 208, 1);

  /* Border */
  border: solid 1px white;
  border-radius: 15px;

  /* Size */
  width: 172px;
  @apply h-16;

  /* Position */
  @apply absolute right-0;

  /* Margin */
  @apply mr-10 mt-4;

  /* Text */
  @apply text-white;
}

.button:hover,
.button:active {
  /* Background */
  @apply bg-white;

  /* Text */
  color: rgba(136, 96, 208, 1);

  /* Border */
  border: 1px solid rgba(136, 96, 208, 1);
}
</style>
