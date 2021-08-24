<template>
  <nav class="toolbar">
    <span class="searchbox">
      <input
        class="searchfield"
        @input="onChangeSearchBarHandler"
        type="text"
        placeholder="Search products..."
      />
      <i class="icon fas fa-search"></i>
    </span>
  </nav>
</template>

<script>
export default {
  data: () => ({
    message: null,
    debounce: null,
  }),

  methods: {
    onChangeSearchBarHandler(event) {
      this.message = null;
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.message = event.target.value;
      }, 600);
    },
  },
};
</script>

<style scoped>
.toolbar {
  /* Position */
  @apply relative;

  /* Alignment */
  @apply flex justify-center;

  /* Margin */
  @apply mx-4 my-16;
}

.searchbox {
  /* Font */
  font-family: "Quicksand", sans-serif;

  /* Position */
  @apply relative;
}

.searchfield {
  /* Background */
  background-color:  rgba(238, 238, 238, 1); 
  
  /* Size */
  width: 800px;
  height: 50px;

  /* Border */
  @apply border rounded-3xl;
  border-color: rgba(238, 238, 238, 1); 

  /* Text Indent */
  @apply pl-12;

  /* Text size */
  @apply text-base;

  /* Text Color */
  @apply text-black;
}

::placeholder {
  /* Text color */
  @apply text-gray-600;
}

.icon {
  /* Size */
  @apply text-xl;

  /* Position */
  @apply absolute left-5 top-4;
}

@keyframes hoverOn {
  from {
    color: black;
  }
  to {
    color: gray;
  }
}
@keyframes hoverOff {
  from {
    color: gray;
  }
  to {
    color: black;
  }
}
</style>
