<template>
  <div class="list-container">
    <div v-for="feedback in feedbacks" :key="feedback.id">
      <PetRequestFeedback :data="feedback" />
    </div>
  </div>
</template>

<script>

import PetRequestFeedback from "./PetRequestFeedback.vue";

export default {
  components: { PetRequestFeedback },
  name: "PetRequestFeedbackList",
  props: ['feedbacks'],
};

</script>

<style scoped>

.list-container {
  /* Flex */
  @apply flex flex-col;

  /* Layout */
  @apply w-full;

  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply font-bold;

  /* Padding */
  @apply px-14;
}

</style>
