<template>
  <div>
    <Searchbar />
    <PetRequestList />
    <Pagination />
  </div>
</template>

<script>
import PetRequestList from "@/components/petinfo/PetRequestList.vue";
import Searchbar from "@/components/Toolbar";
import Pagination from "@/components/Pagination";
export default {
  name: "Pet",
  components: {
    PetRequestList,
    Searchbar,
    Pagination,
  },
};
</script>

<style scoped></style>
