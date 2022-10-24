<template>
    <nav class="navbar-container" role="navigation" aria-label="main navigation">
        <div :class="{ 'is-active': isOpen }">
            <div class="navbar">
                <div class="navbar-menu">
                    <router-link class="navbar-item" :to="{ name: 'home' }">
                        Home
                    </router-link>
                    <router-link class="navbar-item" :to="{ name: 'login' }">
                        Login
                    </router-link>
                    <router-link class="navbar-item" :to="{ name: 'signup' }">
                        Sign Up
                    </router-link>
                </div>
                <div class="logout">
                    <router-link class="logged-in" :to="{ name: 'home' }">
                        <div class="logged-in-name"> {{ authStore.user.email }} </div>
                        <button class="logout-btn" @click="authStore.logout()">
                            <fa icon="fa-right-from-bracket" />
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store'

const authStore = useAuthStore();
const isOpen = ref(false)

const toggleMenu = () => {
    isOpen.value = !isOpen.value
}
</script>
<style scoped>
.navbar-container {
    background-color: #FFA007;
}

.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #FFA007
}
.navbar-menu {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 170px; 
}

.navbar-menu .navbar-item {
    color: white;
}

.navbar-item:hover {
    color: blue;
    background-color: #FFA007;
}

.logged-in {
    width: 180px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.logout-btn {
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.logout {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logged-in-name {
    color: #FFFFFF
}
</style>