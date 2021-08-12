<template>
  <div class="list-container">
    <div v-for="feedback in feedbackList" :key="feedback.id">
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
  data() {
    return {
      feedbackList: this.feedbacks
    };
  }
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
