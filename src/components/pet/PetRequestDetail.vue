<template>
  <div class="pet-detail-container">
    <div class="pet-detail-information">
      <img
        class="pet-detail-information-image"
        :src="data.thumbnail"
        alt="Pet Image"
      />
      <div class="pet-detail-data-container">
        <div class="pet-detail-data-name">
          {{ data.name }}
        </div>
        <div class="pet-detail-data-addition-information">
          Age: {{ data.age }} / Breed: {{ data.breed }}
        </div>

        <div class="pet-detail-data-contact-information">
          <div class="pet-detail-data-contact-owner">
            <img src="..\..\assets\icons\patient.png" alt="" />
            <p>{{ data.sen.name }}</p>
          </div>
          <div class="pet-detail-data-contact-email">
            <img src="..\..\assets\icons\email.png" alt="" />
            <p>{{ data.sen.email }}</p>
          </div>
          <div class="pet-detail-data-contact-phone">
            <img src="..\..\assets\icons\phone.png" alt="" />
            <p>{{ data.sen.phone }}</p>
          </div>
        </div>

        <form>
          <textarea
            class="pet-detail-data-request"
            rows="5"
            maxlength="5120"
            placeholder="Send volunteer request here..."
          />
          <div class="pet-detail-data-request-misc">
            <button class="pet-detail-data-request-button" type="button">
              Request
            </button>
          </div>
        </form>
      </div>
    </div>

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
        <PetRequestFeedbackList :feedbacks="pageOfFeedbacks" />
        <Pagination
          :total-pages="totalPages"
          :total="total"
          :per-page="perPage"
          :current-page="currentPage"
          @pagechanged="onPageChange"
        />
      </div>
      <div v-else>
        <PetRequestDescription
          :info="{
            description: data.description,
            certificates: data.certificate,
          }"
        />
      </div>
    </div>

    <div class="pet-detail-suggestion">
      <div class="pet-detail-suggestion-title">
        See other candidates
      </div>
      <div class="pet-detail-suggestion-content">
        <div class="pet-detail-suggestion-content-1">
          <img src="..\..\assets\pet-images\pet-1.jpg" alt="" />
          <p>Mary CharlotteWithAReallyLongLongLongName</p>
        </div>
        <div class="pet-detail-suggestion-content-2">
          <img src="..\..\assets\pet-images\pet-1.jpg" alt="" />
          <p>Mary Charlotte</p>
        </div>
        <div class="pet-detail-suggestion-content-3">
          <img src="..\..\assets\pet-images\pet-1.jpg" alt="" />
          <p>Mary Charlotte</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/reuseable-component/Heading";
import PetRequestFeedbackList from "@/components/pet/PetRequestFeedbackList";
import PetRequestDescription from "@/components/pet/PetRequestDescription";
import Pagination from "@/components/ui/Pagination";
export default {
  name: "PetRequestDetail",
  props: ["info"],
  components: {
    Heading,
    PetRequestFeedbackList,
    PetRequestDescription,
    Pagination,
  },
  data() {
    return {
      isFeedbackActive: false,
      isDescriptionActive: true,
      data: this.info,
      feedbackList: this.info.feedbacks,
      currentPage: 0,
      perPage: 0,
      total: 0,
      totalPages: 0,
      pageOfFeedbacks: [],
    };
  },
  created() {
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
      console.log(this.pageOfFeedbacks);
    },
  },
};
</script>

<style scoped>
.pet-detail-container {
  /* Display */
  @apply flex-col;

  /* Margin */
  @apply mx-20;

  /* Font */
  font-family: "Quicksand", sans-serif;
  letter-spacing: 0.5px;
  text-rendering: optimizeLegibility;
}

.pet-detail-information,
.pet-detail-feedback {
  /* Margin */
  @apply mx-64;
}

.pet-detail-information {
  /* Display */
  @apply md:flex;
}

.pet-detail-information-image {
  /* Display: Image Content */
  @apply object-cover;

  /* Layout */
  height: 30rem;
  align-self: flex-start;

  @apply sm:w-full md:w-2/5;

  /* Shape */
  @apply rounded-2xl;
}

.pet-detail-data-container {
  /* Flex grow */
  @apply flex-grow;

  /* Size */
  line-height: 1.5;

  /* Padding */
  @apply px-10;
}

.pet-detail-data-name {
  /* Size */
  @apply text-4xl;

  /* Style */
  @apply font-bold;
}

.pet-detail-data-addition-information {
  /* Size */
  @apply text-base;

  /* Style */
  @apply font-bold;
}

.pet-detail-data-description {
  /* Size */
  @apply text-base;

  /* Margin */
  @apply my-4;
}

.pet-detail-data-certificates {
  /* Size */
  @apply text-base;

  /* Style */
  @apply font-bold;

  /* Margin */
  @apply my-4;
}

.pet-detail-data-contact-information {
  /* Display */
  @apply flex-col;

  /* Layout */
  @apply align-middle;
  @apply items-center;

  /* Margin */
  @apply my-4 mb-7;
}

.pet-detail-data-contact-information img {
  /* Display: Image content */
  @apply object-contain;

  /* Shape */
  @apply rounded-none;

  /* Layout */
  @apply w-6 h-6;
}

.pet-detail-data-contact-owner,
.pet-detail-data-contact-email,
.pet-detail-data-contact-phone {
  /* Display */
  @apply flex;

  /* Size */
  @apply text-base;

  /* Style */
  @apply font-bold;

  /* Space */
  @apply space-x-3;

  /* Margin */
  @apply my-3;
}

.pet-detail-data-request {
  /* Display */
  @apply appearance-none;

  /* Size */
  @apply text-base;

  /* Style */
  @apply font-bold;
  
  /* Color */
  background-color: #eeeeee;

  /* Style */
  @apply rounded-2xl;
  @apply outline-none;

  /* Padding */
  @apply px-5 pt-5 pb-7;

  /* Form Properties */
  resize: none;
  width: 100%;
  max-width: 100%;
  height: auto;
  max-height: 50%;
}

textarea::-webkit-scrollbar {
  /* Width */
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 15px;
}

textarea::-webkit-scrollbar-thumb {
  background-color: rgba(196, 196, 196, 1);
  border-radius: 15px;
}

.pet-detail-data-request-misc {
  /* Display */
  @apply flex;

  /* Layout */
  @apply justify-end;

  /* Margin */
  @apply mt-4;
}

.pet-detail-data-request-button {
  /* Size */
  @apply text-base;

  /* Style */
  @apply font-bold;

  /* Shape */
  @apply rounded-xl;

  /* Color */
  @apply text-white;
  background-color: #5680e9;

  /* Padding */
  @apply px-6 py-2;
}

.pet-detail-data-request-button:hover {
  /* Color */
  @apply text-white;
  background-color: #7698ec;
}

.pet-detail-suggestion {
  /* Margin */
  @apply mx-28;
}

.pet-detail-suggestion-title {
  /* Size */
  @apply text-4xl;

  /* Style */
  @apply font-bold;
}

.pet-detail-suggestion-content {
  /* Display */
  @apply grid sm:grid-cols-2 md:grid-cols-3;

  /* Gap */
  @apply gap-x-10;

  /* Color */
  background-color: #eeeeee;

  /* Shape */
  @apply rounded-2xl;

  /* Padding */
  @apply pl-16 py-7;

  /* Margin */
  @apply mt-5;
}

.pet-detail-suggestion-content-1,
.pet-detail-suggestion-content-2,
.pet-detail-suggestion-content-3 {
  /* Display */
  @apply flex;

  /* Layout */
  @apply max-w-full;

  /* Alignment */
  @apply text-left;
}

.pet-detail-suggestion-content-1 img,
.pet-detail-suggestion-content-2 img,
.pet-detail-suggestion-content-3 img {
  /* Display: Image content */
  @apply object-cover;

  /* Shape */
  @apply rounded-2xl;

  /* Layout */
  @apply w-36 h-52;
}

.pet-detail-suggestion-content-1 p,
.pet-detail-suggestion-content-2 p,
.pet-detail-suggestion-content-3 p {
  /* Display */
  @apply flex;

  /* Break */
  @apply break-all;

  /* Size */
  @apply text-base;

  /* Style */
  @apply font-bold;

  /* Layout */
  @apply justify-center;
  @apply items-center;

  /* Margin */
  @apply ml-4;
}

.description-feedback-container {
  /* Margin */
  @apply mx-64 mt-14 mb-16;
}

.headings {
  /* Display */
  @apply flex;
}

.heading {
  /* Font (Override) */
  @apply normal-case;

  /* Size */
  @apply text-4xl;

  /* Margin */
  @apply mx-0;
}

.divider {
  /* Layout */
  @apply h-12;

  /* Border */
  border-left: 2px solid black;

  /* Margin */
  @apply mx-10;
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
</style>
