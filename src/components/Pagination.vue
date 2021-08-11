<template>
    <div class="pagination-container">
        <ul class="items">
            <li>
                <button class="change-page-button change-page-button-inactive">
                    <i class="fa fa-angle-left"></i>
                </button>
            </li>
            <li>
                <button class="page-button current-page">
                    1
                </button>
            </li>
            <li>
                <button class="page-button">
                    2
                </button>
            </li>
            <li>
                <button class="page-button">
                    3
                </button>
            </li>
            <li>
                <button class="change-page-button">
                    <i class="fa fa-angle-right"></i>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.pagination-container {
    /* Flex */
    @apply flex justify-center;

    /* Margin */
    @apply my-4;

    /* Font */
    font-family: "Quicksand", sans-serif;
}

.items {
    /* Flex */
    @apply flex;
}

.page-button {
    /* Padding */
    @apply px-2;

    /* Text */
    @apply bg-white;

    /* Border */
    @apply border border-black rounded-md;

    /* Margin */
    @apply mx-1;

    /* Font weight */
    @apply font-extrabold;
}

.change-page-button {
    /* Padding */
    @apply px-2;
}

.change-page-button-inactive {
    /* Color */
    @apply text-gray-500;
}

.current-page {
    /* Background */
    background-image: linear-gradient(
        to right,
        rgba(136, 96, 208, 0.5), 
        rgba(86, 128, 233, 0.5)
    );
}

.page-button:hover {
    /* Color */
    color: black;
    background-color: lightgray;

    /* Animation */
    animation-duration: 0.2s;
}

.change-page-button:hover{
    /* Color */
    color: gray;

    /* Animation */
    animation-duration: 0.2s;
}
</style>