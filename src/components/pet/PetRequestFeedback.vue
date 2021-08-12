<template>

    <div class="feedback-container">
        <img class="img" src="../../assets/pet-images/pet-1.jpg" />

        <div class="info">
            <div class="username">
                <a href=""> {{ data.username }} </a>
            </div>

            <div class="rating">
                <a><i class="fas fa-star"/></a>
                <span> {{ data.rating_stars }} </span>
            </div>
            
            <div class="feedback-content">
                {{ showedContent }}
                <span v-if="data.comment.length > 510" class="dots">...</span>
                <span class="more">
                    {{ remainContent }}
                </span>
                <button v-if="data.comment.length > 510" class="show-btn" @click="showFullContent()">
                See more
                </button>
            </div>
        </div>
    </div>

</template>


<script>

export default {
    name: "PetRequestFeedback",
    props: ["data"],
    data() {
        return {
        showedContent: this.data.comment.length > 510 ? this.data.comment.substr(0, 510) : this.data.comment,
        remainContent: this.data.comment.substr(510, this.data.comment.length)
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

    /* Width */
    @apply w-full;

    /* Margin */
    @apply mt-10;
}

.img {
    /* Width */
    width: 64px;
    height: 64px;

    /* Center */
    @apply object-contain;

    /* Rounding */
    @apply rounded-full;
}

.info {
    /* Flex */
    @apply flex flex-col;

    /* Layout */
    @apply w-full;

    /* Margin */
    @apply ml-7;
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

    /* Layout */
    @apply w-full;
}

.more {
    /* Visibility */
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