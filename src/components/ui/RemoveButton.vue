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
  width: 48px;
  height: 48px;

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
  width: 24px;
  height: 24px;

  /* Color */
  @apply text-white;
  @apply mt-3 ml-3;
}
</style>
