<template>
  <div class="pet-request-list">
    <div v-for="pet in petList" v-bind:key="pet.id">
      <PetRequestCard v-bind:petData="pet" />
    </div>
  </div>
</template>

<script>
import PetRequestCard from "@/components/petinfo/PetRequestCard";
import petData from "@/assets/data/pet_info.json";

export default {
  name: "PetRequestList",
  components: {
    PetRequestCard,
  },
  data() {
    return {
      petList: petData,
    };
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
