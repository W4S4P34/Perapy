<template>
  <div>
    <PetRequestDetail :info="data"/>
  </div>
</template>

<script>
import PetRequestDetail from "@/components/pet/PetRequestDetail.vue";
import petInfo from "@/assets/data/pet_info.json";
export default {
  name: "PetDetail",
  components: {
    PetRequestDetail,
  },
  data: function() {
    return { data: null }
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
    }
  }
};
</script>

<style scoped></style>
