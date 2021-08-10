<template>

  <div class="pet-request-list">
    <div v-for="pet in petList" v-bind:key="pet.id">
      <PetRequestCard v-bind:petData="pet" />
    </div>
  </div>

</template>

<script>

import PetRequestCard from "@/components/petinfo/PetRequestCard";
export default {
  name: "PetRequestList",
  components: {
    PetRequestCard,
  },
  data() {
    return {
      petList: [
        {
            id: 1,
            type: "Dog",
            breed: "Samoyed",
            name: "Charlotte",
            patients: 1,
            certificates: 1,
            treatments: 3
        },
        {
            id: 2,
            type: "Dog",
            breed: "Samoyed",
            name: "Charlotte",
            patients: 4,
            certificates: 5,
            treatments: 6
        },
        {
            id: 3,
            type: "Dog",
            breed: "Samoyed",
            name: "Charlotte",
            patients: 1,
            certificates: 2,
            treatments: 3
        },
        {
            id: 4,
            type: "Dog",
            breed: "Samoyed",
            name: "Charlotte",
            patients: 7,
            certificates: 8,
            treatments: 9
        },
        {
            id: 5,
            type: "Dog",
            breed: "Samoyed",
            name: "Charlotte",
            patients: 4,
            certificates: 5,
            treatments: 6
        },
        {
            id: 6,
            type: "Dog",
            breed: "Samoyed",
            name: "Charlotte",
            patients: 1,
            certificates: 2,
            treatments: 3
        }
      ],
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
