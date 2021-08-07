<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="dev-info">
        <img
          class="web-logo"
          src="https://avatars.githubusercontent.com/u/47271466?s=48&v=4"
        />
        <h1 class="web-name">Perapy</h1>
        <div class="web-credit">@FitHCMUS - 18KTPM - Group06</div>
      </div>
      <div class="dev-links">
        <a class="terms-of-service">Terms of service</a>
        <a class="liscense">Liscense</a>
        <a><i class="fab fa-facebook-f"/></a>
        <a><i class="fab fa-google"/></a>
        <a><i class="fab fa-twitter"/></a>
        <a><i class="fab fa-slack"/></a>
        <a><i class="fas fa-phone-alt"/></a>
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
  @apply w-full h-40;

  /* Positioning */
  @apply absolute;

  /* Margin */
  @apply mt-8;
}

.footer-container {
  /* Margin */
  @apply mx-12;

  /* Flex */
  @apply flex flex-row justify-between;
}

.dev-info {
  /* Grid */
  @apply grid grid-cols-2 grid-rows-2;

  /* Margin */
  @apply mt-4;
}

.web-logo {
  /* Sizing */
  @apply w-16 h-16;

  /* Alignment */
  @apply self-center justify-self-center;
}

.web-name {
  /* Alignment */
  @apply self-center;

  /* Text */
  @apply text-left text-2xl;

  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply font-bold;
}

.web-credit {
  /* Grid */
  @apply col-span-2;

  /* Text  */
  font-family: "Open Sans", sans-serif;
  @apply text-xs;

  /* Margin */
  @apply mt-4;

  /* Shadow */
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.dev-links {
  /* Flex */
  @apply flex flex-row justify-between;

  /* Font */
  font-family: "Quicksand", sans-serif;
  @apply text-lg font-bold;
}

@keyframes hoverOn {
  from {
    color: black;
  }
  to {
    color: white;
  }
}

@keyframes hoverOff {
  from {
    color: white;
  }
  to {
    color: black;
  }
}

.dev-links a {
  /* Margin */
  @apply mr-6;

  /* Alignment */
  @apply self-center;

  /* Animation */
  animation-name: hoverOff;
  animation-duration: 0.2s;
}

.dev-links a:hover {
  /* Animation */
  animation-name: hoverOn;
  animation-duration: 0.2s;

  /* Color */
  color: white;

  /* Cursor */
  @apply cursor-pointer;
}

</style>