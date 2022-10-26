<template>
    <nav class="navbar-container" role="navigation" aria-label="main navigation">
        <div class="navbar">
            <div class="logo">
                <img src="../assets/pngwing.com (1).png" alt="logo">
                <h1 class="logo-title">Noted</h1>
            </div>
            <div class="menu">
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
            <div class="hamburger">
                <i class="fa solid fa-bars"></i>
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
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Lobster&family=Oswald&family=Roboto&display=swap');

.navbar {
    background-color: #DAA520;
    justify-content: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 150px;
}

.navbar-item {
    color: black;
    font-weight: 1000;
}

.navbar-item:hover {
    color: grey;
    background-color: #DAA520;
    transform: scale(1.1);
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

.logout-btn:hover {
    cursor: pointer;
    color: grey;
    transform: scale(1.5);
}

.logout {
    display: flex;
    justify-content: center;
    align-items: center;
}

.logged-in-name {
    color: black;
    font-weight: bolder;
}

.logo {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
}

.logo-title {
    color: black;
    font-family: 'Lobster', serif;
    font-size: 30px;
}

.hamburger {
    display: none;
    cursor: pointer;
}

@media only screen and (max-width:820px) {

    .logged-in-name {
        display: none;
    }

    .menu {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #DAA520;
    }

    .logged-in {
        width: 30px;
    }

    .menu {
        padding-left: 0px;
    }

}

@media screen and (max-width: 440px) {

    .hamburger {
        display: block;
        cursor: pointer;
    }

    .menu.active {
        left: 0px;
    }

    .menu {
        display: none;
    }

}
</style>