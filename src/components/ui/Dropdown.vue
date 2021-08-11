<template>
    <div>
        <ul class="menu">
            <li @mouseover="listOne = true" @mouseleave="listOne = false">
                <a href="#">
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

.dropdown-content {
    /* Position */
    @apply absolute right-0;

    /* Text  */
    color: black;
    @apply text-left;

    /* Block size */
    width: 160px;

    /* Margin */
    @apply mt-3;
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