<template>
  <div class="pet-request-list">
    <div v-for="pet in pets" v-bind:key="pet.id">
      <PetRequestCard v-bind:petData="pet" />
    </div>
  </div>
</template>

<script>
import PetRequestCard from "@/components/pet/PetRequestCard";

export default {
  name: "PetRequestList",
  props: ["pets"],
  components: {
    PetRequestCard,
  },
};
</script>

<style scoped>
.pet-request-list {
  /* Display */
  @apply grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;

  /* Layout */
  @apply gap-x-2;
  @apply gap-y-7;

  /* Margin */
  @apply mx-40;
}
</style>
