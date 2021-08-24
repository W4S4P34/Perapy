<template>
    <div>
        <ul class="menu">
            <li @mouseover="listOne = true" @mouseleave="listOne = false">
                <a class="dropdownPref">
                    <img
                    class="userImage"
                    src="https://i.pinimg.com/originals/f6/70/a8/f670a8875997412b46cea057e2ba7aae.png"/>
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
}

.userImage {
    /* Sizing */
    @apply w-8 h-8 rounded-full;

    /* Alignment */
    @apply self-center;

    /* Margin */
    @apply mx-2;
}

.dropdownPref {
    /* Flex */
    @apply flex flex-row items-center;

    /* Margin */
    @apply mx-2;
}

.dropdown-content {
    /* Display */
    display: none;

    /* Position */
    @apply absolute right-0;

    /* Text  */
    color: black;
    @apply text-left;

    /* Block size */
    width: 160px;

    /* Margin */
    @apply mt-2;

    /* Index */
    z-index: 100;
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
</style>