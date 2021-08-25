<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="dev-info">
        <img class="web-logo" src="@/assets/icons/logo.png" />
        <h1 class="web-name">Perapy</h1>
      </div>
      <div class="dev-links">
        <div class="subject-info">
          <div>VNUHCM - University of Science</div>
          <div>FIT - Group 06</div>
          <div>CSC13112 - User Interface Design</div>
        </div>
        <div class="contact-info">
          <div class="contact-container">
            <i class="fas fa-map-marker-alt location-icon" />
            <div class="contact-content">
              227 Nguyen Van Cu St., Ward 4, District 5, Ho Chi Minh City,
              Vietnam
            </div>
          </div>
          <div class="contact-container">
            <i class="fas fa-envelope email-icon" />
            <div class="contact-content">
              perapy@hcmus.edu.vn
            </div>
          </div>
          <div class="contact-container">
            <i class="fas fa-phone-alt tel-icon" />
            <div class="contact-content">
              (+84) 77976534
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      message: "Footer",
    };
  },
};
</script>

<style scoped>
footer {
  /* Background */
  background-image: linear-gradient(
    to right,
    rgba(136, 96, 208, 0.5),
    rgba(86, 128, 233, 0.5)
  );

  /* Sizing */
  @apply w-full;
  height: 170px;

  /* Positioning */
  @apply absolute;

  /* Margin */
  @apply mt-8;
}

.footer-container {
  /* Margin */
  @apply mx-12;

  height: inherit;
  /* Flex */
  @apply flex flex-row justify-between;
}

.dev-info {
  /* Grid */
  @apply grid grid-cols-2;

  /* Centering */
  @apply items-center;

  /* Margin */
  @apply mt-7 mb-7;
}

.web-logo {
  /* Sizing */
  width: 86px;
  height: 86px;

  /* Alignment */
  @apply self-center justify-self-center;
}

.web-name {
  /* Alignment */
  @apply self-center;

  /* Text */
  @apply text-left text-4xl;

  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply font-bold;
}

.dev-links {
  /* Grid */
  display: grid;
  grid-template-columns: 270px 270px;
  @apply gap-x-10;

  /* Centering */
  @apply items-center;

  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply text-sm font-semibold;
}

.contact-info {
  /* Flex */
  @apply grid grid-rows-3;
}

.contact-container {
  @apply flex flex-row;
}

.contact-content {
  /* Wrap */
  @apply break-words;

  /* Centering */
  @apply self-end;
}

.location-icon {
  /* Sizing */
  width: 15px;
  height: 20px;

  /* Margin */
  @apply mr-2;

  /* Centering */
  @apply self-center;
}

.email-icon {
  /* Sizing */
  width: 15px;
  height: 15px;

  /* Margin */
  @apply mr-2;

  /* Centering */
  @apply self-end;
}

.tel-icon {
  /* Sizing */
  width: 15px;
  height: 15px;

  /* Margin */
  @apply mr-2;

  /* Centering */
  @apply self-end;
}
</style>
