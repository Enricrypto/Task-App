<template>
    <nav class="navbar container is-transparent" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="" width="112" height="28">
            </a>
            <a role="button" @click="toggleMenu" class="navbar-burger" :class="{'is-active': isOpen}" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
            <div class="navbar-start">
                <a class="navbar-item">
                    Home
                </a>
                <a class="navbar-item">
                    Login
                </a>
                <a class="navbar-item">
                    Sign Up
                </a>
            </div>
        </div>
    </nav>
</template>
<script setup>
import {ref} from 'vue'
const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>
<style scoped>
.navbar{
    background-color: transparent;
}

.navbar-start{
    flex: 1;
    justify-content: center;
}
</style>