<template>
  <div class="det-info">
    <div class="content">
      <slot>Default</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
};
</script>

<style scoped>
.det-info {
  /* Size */
  width: 728px;
  height: 216px;

  /* Margin */
  @apply mt-8 mb-3;

  /* Background */
  background: rgba(193, 200, 228, 0.25);

  /* Rounding */
  @apply rounded-3xl;
}

.content {
  /* Padding */
  @apply p-6;

  /* Font style */
  font-family: 'Open Sans', sans-serif;
  @apply font-bold text-xl;
}</style>
