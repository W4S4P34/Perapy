<template>
  <div class="feedback-container">
    <img class="img" src="../../assets/pet-images/pet-1.jpg" />
    <div class="info">
      <div class="username">
        <a href="">{{ data.userName }}</a>
      </div>
      <div class="rating">
        <a><i class="fas fa-star"/></a>
        <span>{{ data.rating }}</span>
      </div>
      <div class="feedback-content">
        {{ showedContent }}
        <span v-if="data.content.length > 510" class="dots">...</span>
        <span class="more">
            {{remainContent}}
        </span>
        <button v-if="data.content.length > 510" class="show-btn" @click="showFullContent()">
          See more
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductFeedback",
  props: ["data"],
  data() {
    return {
      showedContent: this.data.content.length > 510 ? this.data.content.substr(0, 510) : this.data.content,
      remainContent: this.data.content.substr(510, this.data.content.length)
    };
  },
  methods: {
      showFullContent() {
          const remain = document.querySelector('.more');
          const dots = document.querySelector('.dots');
          const btnText = document.querySelector('.show-btn');
          if(dots.style.display === 'none') {
              dots.style.display = 'inline';
              btnText.innerHTML = "See more";
              remain.style.display = 'none'
          }
          else {
              dots.style.display = 'none';
              btnText.innerHTML = "See less";
              remain.style.display = "inline";
          }
      }
  }
};
</script>

<style scoped>
.feedback-container {
  /* Flex */
  @apply flex flex-row;

  /* Margin */
  @apply mb-16;

  /* Width */
  width: 1250px;
}
.img {
  /* Width */
  width: 64px;
  height: 64px;

  /* Center */
  object-fit: none;
  object-position: center;

  /* Rounding */
  @apply rounded-full;
}
.info {
  /* Flex */
  @apply flex flex-col;

  /* Margin */
  @apply ml-4;
}
.username {
  /* Placement */
  @apply col-start-2;
  /* Text */
  @apply text-2xl;
}

.rating {
  @apply flex flex-row;
}

.rating a {
  @apply self-center;
}

.rating span {
  @apply ml-1;
  @apply text-lg;
}

.feedback-content {
    /* Font */
    @apply font-normal;
}

.more {
    @apply hidden;
}

.show-btn {
  /* Font */
  @apply font-bold;

  /* Text */
  color: rgba(86, 128, 233, 1);

  /* Margin */
  @apply ml-1;
}

.show-btn:hover {
    color: rgb(25, 81, 221, 1)
}
</style>
