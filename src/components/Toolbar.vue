<template>
    <nav class="toolbar">
        <span class="navicon">
            <i class="fa fa-bars"></i>
        </span>
        <span class="searchbox">
            <input class="searchfield" @input="debounceSearch" type="text" placeholder="Search products..."/>
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
        this.message = null
        clearTimeout(this.debounce)
        this.debounce = setTimeout(() => {
          this.message = event.target.value
        }, 600)
      }
    }
}
</script>

<style scoped>
.toolbar {
    /* Alignment */
    @apply flex justify-center;

    /* Margin */
    @apply mx-4 my-8;
}

.navicon {
    /* Flex */
    @apply flex align-middle;

    /* Position */
    @apply absolute left-12;
}

.searchbox {
    /* Font */
    font-family: "Quicksand", sans-serif;

    /* Position */
    @apply relative;
}

.searchfield {
    /* Background */
    @apply bg-gray-300;

    /* Size */
    width: 800px;
    height: 40px;

    /* Border */
    @apply border-gray-300 border rounded-3xl;

    /* Padding */
    @apply px-2;

    /* Text Indent */
    @apply pl-10;

    /* Text size */
    @apply text-sm;
}

.icon {
    /* Position */
    @apply absolute left-4 top-3;
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

.navicon:hover {
    /* Cursor */
  @apply cursor-pointer;
  
  /* Color */
  color: gray;

  /* Animation */
  animation-name: hoverOn;
  animation-duration: 0.2s;
}

.navicon {
    /* Cursor */
  @apply cursor-pointer;
  
  /* Color */
  color: black;

  /* Animation */
  animation-name: hoverOff;
  animation-duration: 0.2s;
}
</style>