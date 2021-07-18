<template>
  <div id="app">
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

<style>
@import url("./../dist/styles.css");
</style>
