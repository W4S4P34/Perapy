<template>

    <div class="pet-description">
    {{ description }}
    </div>
    <div class="certificate-title">
        Certificate
    </div>
    <div class="pet-certificate-container">
        <div class="pet-certificate" v-for="certificate in certificateList" :key="certificate.id">
            <span> -  <strong>{{ certificate.name }}</strong> by {{ certificate.issued_by }} </span>
        </div>
    </div>

</template>

<script>

export default {
    name: "PetRequestDescription",
    props: ['info'],
    data() {
        return {
            certificateList: this.info.certificates,
            description: this.info.description
        }
    }
};

</script>

<style scoped>

.pet-description {
    /* Font */
    font-family: 'Quicksand', sans-serif;
    @apply text-base;

    /* Layout */
    @apply w-full;

    /* Wrap & Break */
    @apply break-words;

    /* Padding */
    @apply px-14;

    /* Margin */
    @apply mt-7 mx-0;
}

.certificate-title {
    /* Font */
    @apply font-semibold;

    /* Padding */
    @apply px-14;
    
    /* Margin */
    @apply mt-3;
}

.pet-certificate-container {
    /* Font */
    font-family: 'Quicksand', sans-serif;
    @apply text-base;

    /* Padding */
    @apply px-14;
    
    /* Margin */
    @apply mt-3;
}

</style>