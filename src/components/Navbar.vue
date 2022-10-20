<template>
    <nav class="navbar container is-transparent" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isOpen}">
            <div class="navbar-start">
                <router-link class="navbar-item" :to="{name: 'home'}">
                    Home
                </router-link>
                <router-link class="navbar-item" :to="{name: 'login'}">
                    Login
                </router-link>
                <router-link class="navbar-item" :to="{name: 'signup'}">
                    Sign Up
                </router-link>
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