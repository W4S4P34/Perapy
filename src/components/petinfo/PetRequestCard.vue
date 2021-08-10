<template>
  <a>
    <div class="card-container">
      <div class="image-container">
        <img class="pet-image" :src="pet.thumbnail" alt="Pet Image" />
      </div>

      <div class="information-container">
        <div class="information-pet-type">{{ pet.type }} - {{ pet.breed }}</div>
        <div class="information-pet-name">
          {{ pet.name }}
        </div>
        <div class="information-pet-description">
          <div class="description-patients">
            <img
              class="description-patients-image"
              src="..\..\assets\icons\patient.png"
              alt=""
            />
            <p>Current Patients: {{ pet.patients }}</p>
          </div>
          <div class="description-certificates">
            <img
              class="description-patients-image"
              src="..\..\assets\icons\certificate.png"
              alt=""
            />
            <p>Certificates: {{ certificatesSize() }}</p>
          </div>
          <div class="description-treatments">
            <img
              class="description-patients-image"
              src="..\..\assets\icons\treatment.png"
              alt=""
            />
            <p>Attended Treatments: {{ pet.treatments }}</p>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "PetRequestCard",
  props: ["petData"],
  data: function() {
    return {
      pet: this.petData,
    };
  },
  methods: {
    certificatesSize: function() {
      return this.pet.certificate.length;
    },
  },
};
</script>

<style scoped>
.card-container {
  /* Display */
  @apply flex-col;

  /* Layout */
  @apply max-w-max max-h-full;
  @apply justify-between;
  @apply items-center;
  @apply space-y-2;

  /* Shape */
  @apply rounded-2xl;

  /* BG Color */
  background-color: #fbf9f9;

  /* Padding */
  @apply p-5;

  /* Margin */
  @apply mx-auto;
}

.image-container {
  /* Display */
  @apply flex-shrink;

  /* Layout */
  @apply w-full;
}

.pet-image {
  /* Display: Image content */
  @apply object-cover;

  /* Layout */
  width: 220;
  height: 200px;

  /* Shape */
  @apply rounded-2xl;
}

.information-container {
  /* Layout */
  @apply w-full;

  /* Font */
  font-family: "Quicksand", sans-serif;
  letter-spacing: 0.5px;

  /* Alignment */
  @apply text-left;

  /* Margin */
  @apply mx-0;
}

.information-pet-type {
  /* Size */
  font-size: 12px;
  line-height: 1.5rem;

  /* Color */
  @apply text-gray-500;

  /* Styles */
  @apply font-semibold;

  /* Margin */
  @apply my-1;
}

.information-pet-name {
  /* Size */
  font-size: 24px;

  /* Color */
  @apply text-black;

  /* Styles */
  @apply font-bold;
}

.information-pet-description {
  /* Display */
  @apply flex-col;
}

.description-patients,
.description-certificates,
.description-treatments {
  /* Display */
  @apply flex;

  /* Layout */
  @apply items-center;

  /* Margin */
  @apply my-5;
}

.description-patients img,
.description-certificates img,
.description-treatments img {
  /* Display: Image content */
  @apply object-contain;

  /* Layout */
  @apply w-6 h-6;
}

.description-patients p,
.description-certificates p,
.description-treatments p {
  /* Size */
  font-size: 16px;

  /* Color */
  @apply text-black;

  /* Styles */
  @apply font-bold;

  /* Margin */
  @apply ml-2;
}
</style>
