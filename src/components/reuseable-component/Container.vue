<template>
  <div class="p-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style scoped>
.p-container {
  /* Size */
  width: 1640px;
  height: 312px;

  /* Background */
  background-color: rgba(251, 249, 249, 1);

  /* Margin */
  @apply mx-auto my-16;
}
</style>
