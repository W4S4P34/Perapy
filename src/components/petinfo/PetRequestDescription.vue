<template>

    <div class="pet-description">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est
    laborum."
    </div>
    <div class="pet-certificate-container">
        <div class="pet-certificate" v-for="certificate in certificateList" :key="certificate.id">
            <p> {{ certificate.name }} </p>
        </div>
    </div>

</template>

<script>

export default {
    name: "PetRequestDescription",
    data() {
        return {
            certificateList: [
                { 
                    id: "1",
                    name: "Certificate 1"
                },
                { 
                    id: "2",
                    name: "Certificate 2"
                },
                { 
                    id: "3",
                    name: "Certificate 3"
                },
                { 
                    id: "4",
                    name: "Certificate 4"
                }
            ]
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