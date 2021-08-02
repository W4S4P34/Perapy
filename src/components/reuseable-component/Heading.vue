<template>
    <h1 class="heading">
        <slot>Default</slot>
    </h1>
</template>

<script>
export default {
    name: 'Heading'
}
</script>

<style scoped>
.heading {
    /* Font */
    font-family: 'Quicksand', sans-serif;
    @apply font-bold leading-10 uppercase;
    font-size: 40px;

    /* Margin */
    @apply ml-60;
}
</style>