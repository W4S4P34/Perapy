<template>
  <div id="app" class="app">
    {{ message }}
    <i class="fas fa-laugh-wink"></i>
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
