<template>
  <header>
    <nav class="navbar">
      <div class="header-container">
        <div class="logo">
          <h1>Perapy</h1>
        </div>
        <div class="topics">
          <router-link to="/">Home</router-link>
          <router-link to="/products">Products</router-link>
          <router-link to="/therapy">Pet Therapy</router-link>
          <router-link to="/services">Services</router-link>
        </div>
        <div class="userPref">
          <a
            ><img
              class="userImage"
              src="https://i.pinimg.com/originals/f6/70/a8/f670a8875997412b46cea057e2ba7aae.png"
          /></a>
          <div class="dropdown">
            <Dropdown />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Dropdown from "./Dropdown.vue";
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

.topics {
  /* Flex */
  @apply flex flex-row items-center;
}

.topics a {
  /* Grid */
  @apply col-span-1;

  /* Text */
  font-family: "Quicksand", sans-serif;
  @apply text-gray-500;
  @apply font-light;

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

.userImage {
  /* Sizing */
  @apply w-8 h-8 rounded-full;

  /* Alignment */
  @apply self-center;
}

.dropdown {
  /* Margin */
  @apply mx-2;
}

@keyframes hoverOn {
  from {
    color: gray;
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
    color: gray;
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
  /* Color */
  color: gray;

  /* Animation */
  animation-name: hoverOff;
  animation-duration: 0.2s;
}

.userPref div:hover {
  /* Cursor */
  @apply cursor-pointer;

  /* Color */
  color: black;

  /* Animation */
  animation-name: hoverOn;
  animation-duration: 0.2s;
}
</style>
