<template>
    <div class="shipping-form">
        <div class="shipping-info">
            <h1 class="heading">Shipping Information</h1>
            <div class="shipping-content">
                <div class="user-info">
                    <span class="label">Name</span>
                    <span class="user-data"><b>Michael Johnson</b></span>
                </div>
                <div class="user-info">
                    <span class="label">Address</span>
                    <span class="user-data">123 Sunny St., Cookie Ward</span>
                </div>
                <div class="user-info">
                    <span class="label">Phone</span>
                    <span class="user-data">0123456789</span>
                </div>
                <button class="edit-info" disabled>
                    <i class="fas fa-pen" aria-hidden="true"></i>
                    Edit Information
                </button>
            </div>
        </div>
        <form class="shipping-info">
            <h1 class="heading">Payment Method</h1>
            <div class="shipping-content">
                <div class="payment-info">
                    <input type="radio" id="cashChoice" name="payment_method" value="cash" checked="checked" class="radio-btn">
                    <label for="cashChoice">
                        <img src="@/assets/icons/COD.png" alt="">
                        <p>Cash on delivery</p>
                    </label>
                </div>
                <div class="payment-info">
                    <input type="radio" id="bankingChoice" name="payment_method" value="banking" class="radio-btn">
                    <label for="bankingChoice">
                        <img src="@/assets/icons/ATM.png" alt="">
                        <p>Local ATM Card / Internet Banking</p>
                    </label>
                </div>
                <button class="edit-info" disabled>
                    <i class="fas fa-plus" aria-hidden="true"></i>
                    Add / Choose Card
                </button>
            </div>
        </form>
        <div class="export-receipt">
            <input type="checkbox">
            Export receipt
        </div>
        <button type="submit" class="buy-button" @click="handleBuy">Buy</button>
    </div>
</template>

<script>
export default {
    name: "ShippingForm",
    methods: {
        handleBuy() {
            this.$emit("buy");
        },
    }
}
</script>

<style scoped>
.shipping-form {
    /* Background */
    @apply bg-gray-300;

    /* Size */
    width: 600px;
    height: 850px;

    /* Margin */
    @apply ml-14 my-20;

    /* Corner */
    @apply rounded-3xl;

    /* Padding */
    @apply p-10;

    /* Position */
    @apply relative;
}

.heading {
    /* Font */
    font-family: "Quicksand", sans-serif;

    /* Size */
    @apply text-4xl font-bold;
}

.shipping-content {
    /* Margin */
    @apply mt-10;
}

.user-info {
    /* Grid */
    @apply grid grid-cols-3;
    
    /* Font */
    font-family: "Quicksand", sans-serif;

    /* Size */
    @apply text-2xl;

    /* Margin */
    @apply mb-8;
}

.label {
    /* Alignment */
    @apply text-left;

    /* Grid Size */
    @apply col-span-1;
}

.user-data {
    /* Alignment */
    @apply text-left;

    /* Grid Size */
    @apply col-span-2;
}

.edit-info {
    /* Border */
    @apply border border-black rounded-xl;

    /* Size */
    @apply w-full;

    /* Text */
    font-family: "Quicksand", sans-serif;
    @apply text-2xl font-bold;

    /* Margin */
    @apply mb-10;

    /* Padding */
    @apply py-1;

    /* Transition */
    transition: 0.2s;
}

.payment-info {
    /* Size */
    @apply text-2xl;

    /* Alignment */
    @apply flex items-center;
    
    /* Font */
    font-family: "Quicksand", sans-serif;
    
    /* Margin */
    @apply mb-8;
}

label {
    /* Flex */
    @apply flex items-center;
}

.payment-info img {
    /* Display: Image content */
    @apply object-contain;

    /* Layout */
    @apply w-9 h-9;

    /* Margin */
    @apply ml-4;
}

.radio-btn {
    /* Size */
    @apply w-6 h-6;

}

.payment-info p {
    /* Styles */
    @apply font-bold;

    /* Margin */
    @apply ml-4;
}

.export-receipt {
    /* Flex */
    @apply flex items-center;

    /* Margin */
    @apply mb-8;

    /* Font */
    font-family: "Quicksand", sans-serif;
    @apply text-2xl font-bold;
}

input[type=checkbox] {
    /* Size */
    @apply w-6 h-6;

    /* Margin */
    @apply mr-4;
}

.buy-button {
    /* Position */
    @apply absolute;

    /* Alignment */
    right: 0;

    /* Margin */
    @apply mr-10;

    /* Font */
    font-family: "Quicksand", sans-serif;

    /* Text size */
    @apply text-xl font-bold;

    /* Color */
    @apply text-white;

    /* Border */
    @apply border border-blue-500 rounded-3xl;
    
    /* Background */
    @apply bg-blue-500;

    /* Padding */
    @apply py-3 px-10;

    /* Transition */
    transition: 0.2s;
}

.edit-info:hover {
    /* Background Hover */
    @apply bg-gray-400;

    /* Border Hover */
    @apply border-gray-400;
}

.buy-button:hover {
    /* Background Hover */
    @apply bg-gray-400;

    /* Border Hover */
    @apply border-gray-400;
}

.fade-enter-active, .fade-leave-active {
    /* Transition */
    @apply transition-opacity;
}

.fade-enter, .fade-leave-active {
    /* Opacity */
    opacity: 0;
}

</style>