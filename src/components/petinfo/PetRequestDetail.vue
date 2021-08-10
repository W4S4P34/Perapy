<template> 

<div class="pet-detail-container">
    <div class="pet-detail-information">
        <img class="pet-detail-information-image" 
            src="..\..\assets\pet-images\pet-1.jpg" 
            alt="Pet Image" />
        <div class="pet-detail-data-container">
            <div class="pet-detail-data-name">
                Pet name
            </div>
            <div class="pet-detail-data-addition-information">
                Age: 3 / Breed: Golden Retriever
            </div>
            <div class="pet-detail-data-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </div>

            <div class="pet-detail-data-certificates">
                Certificate 1<br/>
                Certificate 2<br/>
                Certificate 1<br/>
                Certificate 2<br/>
                Certificate 1<br/>
                Certificate 2<br/>
                Certificate 1<br/>
                Certificate 2<br/>
                Certificate 1<br/>
                Certificate 2<br/>
                Certificate 1<br/>
                Certificate 2<br/>
                Certificate 1<br/>
                Certificate 2<br/>
                Certificate 3
            </div>

            <div class="pet-detail-data-contact-information">
                <div class="pet-detail-data-contact-owner">
                    <img src="..\..\assets\icons\patient.png" alt="">
                    <p>Mary Charlotte</p>
                </div>
                <div class="pet-detail-data-contact-email">
                    <img src="..\..\assets\icons\email.png" alt="">
                    <p>abc_xyz_abc@example.com</p>
                </div>
                <div class="pet-detail-data-contact-phone">
                    <img src="..\..\assets\icons\phone.png" alt="">
                    <p>0903928374</p>
                </div>
            </div>

            <form>
                <textarea 
                    class="pet-detail-data-request"
                    rows="5" maxlength="2048"
                    placeholder="Send volunteer request here..."/>
                <div class="pet-detail-data-request-misc">
                    <div class="pet-detail-data-request-status">
                        (2048)
                    </div>
                    <button class="pet-detail-data-request-button" type="button">
                        Request
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div class="pet-detail-feedback">
        <div class="pet-detail-feedback-title">
            Feedback
        </div>
        <div class="pet-detail-feedback-list">
            Placeholder
        </div>
    </div>

    <div class="pet-detail-suggestion">
        <div class="pet-detail-suggestion-title">
            See other candidates
        </div>
        <div class="pet-detail-suggestion-content">
            <div class="pet-detail-suggestion-content-1">
                <img src="..\..\assets\pet-images\pet-1.jpg" alt="">
                <p>Mary Charlotte</p>
            </div>
            <div class="pet-detail-suggestion-content-2">
                <img src="..\..\assets\pet-images\pet-1.jpg" alt="">
                <p>Mary Charlotte</p>
            </div>
            <div class="pet-detail-suggestion-content-3">
                <img src="..\..\assets\pet-images\pet-1.jpg" alt="">
                <p>Mary Charlotte</p>
            </div>
        </div>
    </div>
</div>

</template>


<script>

export default {
  name: "PetRequestDetail"
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
    letter-spacing: .5px;
    text-rendering: optimizeLegibility; 
}

.pet-detail-information,
.pet-detail-feedback {
    /* Margin */
    @apply mx-28;
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
    /* Size */
    line-height: 1.5;

    /* Padding */
    @apply px-10;
}

.pet-detail-data-name {
    /* Size */
    font-size: 32px;

    /* Style */
    @apply font-bold;
}

.pet-detail-data-addition-information {
    /* Size */
    font-size: 16px;

    /* Style */
    @apply font-bold;
}

.pet-detail-data-description {
    /* Size */
    font-size: 14px;
    
    /* Margin */
    @apply my-4;
}

.pet-detail-data-certificates {
    /* Size */
    font-size: 14px;

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
    font-size: 14px;

    /* Style */
    @apply font-bold;

    /* Space */
    @apply space-x-3;

    /* Margin */
    @apply my-1;
}

.pet-detail-data-request {
    /* Display */
    @apply appearance-none;

    /* Size */
    font-size: 14px;

    /* Style */
    @apply font-bold;

    /* Color */
    @apply bg-gray-100;

    /* Style */
    @apply rounded-2xl;

    /* Padding */
    @apply px-5 pt-2 pb-3;

    /* Form Properties */
    resize: none;
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: 50%;
}

.pet-detail-data-request-misc {
    /* Display */
    @apply flex;

    /* Layout */
    @apply justify-between;
}

.pet-detail-data-request-status {
    /* Size */
    font-size: 14px;

    /* Style */
    @apply font-bold;
}

.pet-detail-data-request-button {
    /* Size */
    font-size: 16px;

    /* Style */
    @apply font-bold;

    /* Shape */
    @apply rounded-xl;

    /* Color */
    @apply text-white;
    background-color: #5680E9;

    /* Padding */
    @apply px-6 py-2;
}

.pet-detail-data-request-button:hover {
    /* Color */
    @apply text-white;
    background-color: #7698ec;
}


.pet-detail-feedback {
    /* Margin */
    @apply my-5;
}

.pet-detail-feedback-title,
.pet-detail-suggestion-title {
    /* Size */
    font-size: 32px;

    /* Style */
    @apply font-bold;
}

.pet-detail-feedback-list {
    /* Layout */
    @apply h-20;
}

.pet-detail-suggestion-content {
    /* Display */
    @apply grid sm:grid-cols-2 md:grid-cols-3;

    /* Color */
    background-color: #FBF9F9;

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

    /* Space */
    @apply space-x-3;

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
    @apply w-28 h-40;
}

.pet-detail-suggestion-content-1 p,
.pet-detail-suggestion-content-2 p,
.pet-detail-suggestion-content-3 p {
    /* Display */
    @apply flex;

    /* Size */
    font-size: 14px;

    /* Style */
    @apply font-bold;

    /* Layout */
    @apply justify-center;
    @apply items-center;
}

</style>