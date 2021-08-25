<template>
    <div>
        <ul class="menu">
            <img
                class="userImage"
                src="https://i.pinimg.com/originals/f6/70/a8/f670a8875997412b46cea057e2ba7aae.png"/>  
            <div class="userPref">
                <li @mouseover="listOne = true" @mouseleave="listOne = false">
                    <a class="dropdownPref">
                        <i class="fas fa-angle-down"></i>
                    </a>
                    <transition name="fade">
                        <ul class="dropdown-content" v-if="listOne" @click="listOne = false">
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Notification</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </transition>
                </li>
            </div> 
        </ul>
    </div>
</template>

<script>
export default {
    name: 'userPref-dropdown',
    data() {
        return {
            listOne: false,
        }
    },
}
</script>

<style scoped>
.menu { 
    /* Font */
    font-family: 'Open Sans', sans-serif;

    /* Flex */
    @apply flex flex-row items-center;

    @apply mt-1;
}

.userImage {
    /* Sizing */
    @apply w-8 h-8 rounded-full;

    /* Alignment */
    @apply self-center;

    /* Margin */
    @apply mr-2;
}

.dropdown-content {
    /* Display */
    display: none;

    /* Position */
    @apply absolute right-0;

    /* Text  */
    color: black;
    @apply text-left;

    /* Padding */
    @apply pt-3;

    /* Block size */
    width: 160px;

    /* Index */
    z-index: 4;
}

.dropdown-content, .dropdown-content:hover {
    display: block;
}

.dropdown-content a {
    /* Display */
    display: block;
    
    /* Padding */
    @apply px-4 py-3;

    /* Background */
    background: rgb(230, 224, 224);

    /* Transition */
    transition: .2s;
}

.dropdown-content a:hover {
    /* Background Hover */
    background: rgb(196, 196, 196);
}

.fade-enter-active, .fade-leave-active {
    /* Transition */
    @apply transition-opacity;
}

.fade-enter, .fade-leave-active {
    /* Opacity */
    opacity: 0;
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

.userPref {
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