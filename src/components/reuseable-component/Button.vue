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
  background-color: rgba(86, 128, 233, 1);

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

  /* Transition */
  transition: 0.1s
}

.button:hover,
.button:active {
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}
</style>
