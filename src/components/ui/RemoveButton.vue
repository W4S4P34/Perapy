<template>
  <div class="remove-btn">
    <i class="fas fa-trash remove-icon"></i>
  </div>
</template>

<script>
export default {
  name: "removeButton",
  }
</script>

<style scoped>
.remove-btn {
  /* Position */
  @apply absolute;
  @apply right-0 bottom-0;

  /* Sizing */
  width: 44px;
  height: 44px;

  /* Background */
  background-color: rgba(217, 86, 86, 1);

  /* Rounded */
  @apply rounded-full;

  /* Z-index */
  z-index: 999px;

  /* Cursor */
  @apply cursor-pointer;
}

.remove-icon {
  /* Sizing */
  width: 20px;
  height: 20px;

  /* Color */
  @apply text-white;
  @apply mt-3 ml-3;
}
</style>
