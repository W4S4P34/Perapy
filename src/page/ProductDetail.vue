<template>
  <div class="page-container">
    <ProductDetail
      :info="{
        id: data.id,
        name: data.name,
        thumbnail: data.thumbnail,
        price: data.price,
        rating: data.numberRating,
        aveRating: data.rating_stars,
        category: data.category,
        subCategory: data.sub_category,
      }"
    />
    <div class="description-feedback-container">
      <div class="headings">
        <Heading
          :class="[tabs, { active: isDescriptionActive }]"
          @click="descriptionActive"
        >
          Description
        </Heading>
        <div class="divider" />
        <Heading
          :class="[feedback, tabs, { active: isFeedbackActive }]"
          @click="feedbackActive"
        >
          Feedback
        </Heading>
      </div>
      <div v-if="isFeedbackActive">
        <ProductFeedbackList v-bind:info="pageOfFeedbacks" />
        <Pagination
          :total-pages="totalPages"
          :total="total"
          :per-page="perPage"
          :current-page="currentPage"
          @pagechanged="onPageChange"
        />
      </div>
      <div v-else>
        <ProductDescription
          :info="{
            shortDescription: data.short_description,
            longDescription: data.long_description,
            ingredients: data.ingredients,
          }"
        />
      </div>
    </div>

    <Heading>You might Also like</Heading>
    <Container><ProductSuggestionList :list="suggestionList"/></Container>
    <CartButton />
  </div>
</template>

<script>
import ProductDetail from "@/components/product/ProductDetail";
import Container from "@/components/reuseable-component/Container";
import Heading from "@/components/reuseable-component/Heading";
import ProductSuggestionList from "@/components/product/ProductSuggestionList";
import ProductFeedbackList from "@/components/product/ProductFeedbackList";
import ProductDescription from "@/components/product/ProductDescription";
import Pagination from "@/components/ui/Pagination";
import CartButton from "@/components/ui/CartButton";
import productData from "@/assets/data/product.json";

export default {
  name: "ProductDetailPage",
  components: {
    ProductDetail,
    Heading,
    Container,
    ProductSuggestionList,
    ProductFeedbackList,
    Pagination,
    ProductDescription,
    CartButton,
  },
  data() {
    return {
      isFeedbackActive: false,
      isDescriptionActive: true,
      feedbackList: [],
      data: null,
      currentPage: 0,
      perPage: 0,
      total: 0,
      totalPages: 0,
      pageOfFeedbacks: [],
    };
  },
  created() {
    this.fetchData();
    this.currentPage = 1;
    this.perPage = 6;
    this.total = this.data.feedbacks.length;
    this.paginator(this.feedbackList, this.currentPage, this.perPage);
  },

  computed: {
    feedback() {
      return "feedback";
    },
    tabs() {
      return "tabs";
    },
    suggestionList() {
      let returnedArray = [],
        chosenNumber = 0;
      do {
        let product = productData[Math.floor(Math.random() * 50)];
        if (product) {
          let duplicateProd = returnedArray.filter(
            (each) => each.id === product.id
          );
          if (product.id !== this.data.id && duplicateProd.length === 0) {
            returnedArray.push(product);
            chosenNumber++;
          }
        }
      } while (chosenNumber < 3);
      return returnedArray;
    },
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    feedbackActive() {
      this.isFeedbackActive = true;
      this.isDescriptionActive = false;
    },
    descriptionActive() {
      this.isFeedbackActive = false;
      this.isDescriptionActive = true;
    },
    fetchData() {
      // Get product detail
      let res;
      const fetchedId = this.$route.params.productId;
      productData.forEach((product) => {
        if (product.id === fetchedId) {
          res = product;
        }
      });
      if (res) {
        this.data = res;
        this.feedbackList = this.data.feedbacks;
      }
    },
    onPageChange(page) {
      this.currentPage = page;
      this.paginator(this.feedbackList, this.currentPage, this.perPage);
    },
    paginator(items, current_page, per_page_items) {
      let page = current_page || 1,
        per_page = per_page_items || 6,
        offset = (page - 1) * per_page,
        paginatedItems = items.slice(offset).slice(0, per_page_items),
        total_pages = Math.ceil(items.length / per_page);

      this.currentPage = page;
      this.perPage = per_page;
      this.total = items.length;
      this.totalPages = total_pages;
      this.pageOfFeedbacks = paginatedItems;
    },
  },
};
</script>

<style scoped>
.description-feedback-container {
  /* Margin */
  @apply ml-36;
}
.headings {
  @apply flex flex-row;
}
.divider {
  /* Width */
  @apply h-12;

  /* Border */
  border-left: 1px solid black;

  /* Margin */
  @apply ml-10;
}
.tabs {
  /* Cursor */
  @apply cursor-pointer;
  transition: color 0.2s;

  /* Text color */
  color: rgb(141, 141, 141, 1);
}

.tabs:hover,
.active {
  color: black;
}

.feedback {
  @apply ml-10 !important;
}
</style>
