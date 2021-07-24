<template>
  <div class="app">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "I'm from vue file",
    };
  },
};
</script>

<style scoped>
.app {
  @apply text-center;
}
</style>
