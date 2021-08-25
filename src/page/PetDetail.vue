<template>
  <div>
    <Modal v-if="isOpen" @confirm="handlePetModal" :hideCancelBtn="true"
      >Your request has been sent, please wait for response from volunteer!</Modal
    >
    <PetRequestDetail :info="data" @request="handlePetModal" />
  </div>
</template>

<script>
import PetRequestDetail from "@/components/pet/PetRequestDetail.vue";
import petInfo from "@/assets/data/pet_info.json";
import Modal from "@/components/reuseable-component/Modal.vue";

export default {
  name: "PetDetail",
  components: {
    PetRequestDetail,
    Modal,
  },
  data: function() {
    return { data: null, isOpen: false };
  },
  created: function() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData: function() {
      let res;
      const fetchedId = this.$route.params.petId;

      petInfo.forEach((pet) => {
        if (pet.id === fetchedId) {
          res = pet;
        }
      });
      this.data = res;
    },
    handlePetModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped></style>
