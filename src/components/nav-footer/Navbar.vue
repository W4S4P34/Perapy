<template>
  <header>
    <nav class="navbar">
      <div class="header-container">
        <div class="logo">
          <img
            class="web-logo"
            src="@/assets/icons/logo.png"
          />
        </div>
        <div class="topics">
          <router-link to="/">Home</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/therapy">Pet Therapy</router-link>
          <router-link to="/services">Services</router-link>
        </div>
        <div class="userPref">
          <Dropdown />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Dropdown from "../ui/Dropdown.vue";
export default {
  name: "Navbar",
  components: {
    Dropdown,
  },
};
</script>

<style scoped>
.navbar {
  /* Background */
  background-image: linear-gradient(
    to right,
    rgba(136, 96, 208, 0.5),
    rgba(86, 128, 233, 0.5)
  );

  /* Size */
  @apply w-full h-12;

  /* Position */
  @apply absolute;

  /* Margin */
  @apply mb-5;
}

.header-container {
  /* Margin */
  @apply my-1 mx-1;

  /* Flex */
  @apply flex justify-between;
}

.logo h1 {
  /* Alignment */
  @apply self-center;

  /* Margin */
  @apply ml-1;

  /* Text */
  @apply text-left text-3xl;

  /* Font */
  font-family: "Quicksand", sans-serif;
}

.web-logo {
  /* Sizing */
  @apply w-10 h-10;

  /* Alignment */
  @apply self-center justify-self-center;

  /* Margin */
  @apply ml-1;
}

.topics {
  /* Flex */
  @apply flex flex-row items-center;
}

.topics a {
  /* Grid */
  @apply col-span-1;

  /* Text */
  font-family: "Quicksand", sans-serif;
  @apply text-gray-700;

  /* Margin */
  @apply mx-14 my-2;
}

.topics .selected_content {
  /* Text */
  @apply text-black font-bold;
}

.router-link-active,
.router-link-exact-active {
  @apply text-black font-bold !important;
}

.userPref {
  /* Flex */
  @apply flex items-center;
}

@keyframes hoverOn {
  from {
    @apply text-gray-700;
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
    @apply text-gray-700;
  }
}

.topics a:hover {
  /* Color */
  color: white;

  /* Animation */
  animation-name: hoverOn;
  animation-duration: 0.2s;
}

.topics a {
  /* Animation */
  animation-name: hoverOff;
  animation-duration: 0.2s;
}

.userPref:hover {
  /* Cursor */
  @apply cursor-pointer;

  /* Color */
  color: white;

  /* Animation */
  animation-name: hoverOn;
  animation-duration: 0.2s;
}
</style>
