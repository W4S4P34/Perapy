<template>
  <div class="app">
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "I'm from vue file",
    };
  },
  components: {
  },

};
</script>


<style scoped>

/* Fonts */
/* @font-face {
    font-family: Open-Sans-Regular;
    src: url-loader("../assets/fonts/OpenSans-Regular.ttf") format('truetype');
}

@font-face {
    font-family: Quicksand-Regular;
    src: url-loader("../assets/fonts/Quicksand-Regular.ttf") format('truetype');
} */
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.app {
  @apply text-center;
  @apply overflow-auto;
}
</style>
