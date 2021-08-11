<template>
  <div>
    <Searchbar />
    <PetRequestList v-bind:pets="this.pageOfPets" />
    <pagination
      :total-pages="totalPages"
      :total="total"
      :per-page="perPage"
      :current-page="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import PetRequestList from "@/components/pet/PetRequestList.vue";
import Searchbar from "@/components/ui/Toolbar";
import Pagination from "@/components/ui/Pagination-2";
import PetData from "@/assets/data/pet_info.json";

export default {
  name: "PetList",
  components: {
    PetRequestList,
    Searchbar,
    Pagination,
  },
  data() {
    return {
      currentPage: 0,
      perPage: 0,
      total: 0,
      totalPages: 0,
      petList: PetData,
      pageOfPets: [],
    };
  },
  created() {
    this.currentPage = 1;
    this.perPage = 12;
    this.total = this.petList.length;
    this.paginator(this.petList, this.currentPage, this.perPage);
  },

  methods: {
    onPageChange(page) {
      this.currentPage = page;
      this.paginator(this.petList, this.currentPage, this.perPage);
    },
    paginator(items, current_page, per_page_items) {
      let page = current_page || 1,
        per_page = per_page_items || 10,
        offset = (page - 1) * per_page,
        paginatedItems = items.slice(offset).slice(0, per_page_items),
        total_pages = Math.ceil(items.length / per_page);

      this.currentPage = page;
      this.perPage = per_page;
      this.total = items.length;
      this.totalPages = total_pages;
      this.pageOfPets = paginatedItems;
    },
  },
};
</script>

<style scoped></style>
