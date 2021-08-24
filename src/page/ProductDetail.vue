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
        <ProductFeedbackList :info="data.feedbacks" />
      </div>
      <div v-else>
        <ProductDescription :info="{shortDescription: data.short_description, longDescription: data.long_description, ingredients: data.ingredients}" />
      </div>
    </div>

    <Heading>You might Also like</Heading>
    <Container><ProductSuggestionList /></Container>
    <CartButton/>
  </div>
</template>

<script>
import ProductDetail from "@/components/product/ProductDetail";
import Container from "@/components/reuseable-component/Container";
import Heading from "@/components/reuseable-component/Heading";
import ProductSuggestionList from "@/components/product/ProductSuggestionList";
import ProductFeedbackList from "@/components/product/ProductFeedbackList";
import ProductDescription from "@/components/product/ProductDescription";
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
    ProductDescription,
    CartButton,
  },
  data() {
    return {
      isFeedbackActive: false,
      isDescriptionActive: true,
      data: null,
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    feedback() {
      return "feedback";
    },
    tabs() {
      return "tabs";
    },
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    feedbackActive() {
      console.log("Feedback active");
      this.isFeedbackActive = true;
      this.isDescriptionActive = false;
    },
    descriptionActive() {
      console.log("Details active");
      this.isFeedbackActive = false;
      this.isDescriptionActive = true;
    },
    fetchData() {
      let res;
      const fetchedId = this.$route.params.productId;
      productData.forEach((product) => {
        if (product.id === fetchedId) {
          res = product;
        }
      });
      this.data = res;
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
