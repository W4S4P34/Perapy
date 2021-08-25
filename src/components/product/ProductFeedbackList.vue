<template>
  <div class="list-container">
    <div v-for="feedback in info" :key="feedback.id">
      <ProductFeedback :data="{userName: feedback.username, rating: feedback.rating_stars, content: feedback.comment}" />
    </div>
  </div>
</template>

<script>
import ProductFeedback from "./ProductFeedback.vue";
export default {
  components: { ProductFeedback },
  name: "ProductFeedbackList",
  props: ['info'],
};
</script>

<style scoped>
.list-container {
  /* Flex */
  @apply flex flex-col;

  /* Margin */
  @apply ml-56 mt-14;

  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply font-bold;
}

</style>
