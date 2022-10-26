<template>
    <div class="sidebar" :style="{ width: barWidth }">
        <h1>
            <span v-if="coll">
                <div class="top-icons">
                    <div class="icon-top">
                        <router-link :to="{ name: 'home' }">
                            <div class="navbar-item">
                                <fa icon="house" />
                            </div>
                        </router-link>
                    </div>
                    <div>
                        <router-link :to="{ name: 'login' }">
                            <div class="navbar-item">
                                <fa icon="right-to-bracket" />
                            </div>
                        </router-link>
                    </div>
                    <div>
                        <router-link :to="{ name: 'signup' }">
                            <div class="navbar-item">
                                <fa icon="user-plus" />
                            </div>
                        </router-link>
                    </div>
                    <div>
                        <router-link class="logged-in" :to="{ name: 'home' }">
                                <div class="navbar-item" @click="authStore.logout()">
                                    <fa icon="fa-right-from-bracket" />
                                </div>
                        </router-link>
                    </div>
                </div>
            </span>
            <span v-else>
                <div class="logo">
                    <img width="30"
                        src="https://res.cloudinary.com/dcg8x1th3/image/upload/v1666771568/APP/pngwing.com_1_suytbn.png"
                        alt="logo">
                    <h1 class="logo-title">Noted</h1>
                </div>
                <ul>
                    <router-link :to="{ name: 'home' }">
                        <li class="navbar-item">Home</li>
                    </router-link>
                    <router-link :to="{ name: 'login' }">
                        <li class="navbar-item">Login</li>
                    </router-link>
                    <router-link :to="{ name: 'signup' }">
                        <li class="navbar-item">Signup</li>
                    </router-link>
                    <li>
                        <router-link class="logged-in" :to="{ name: 'home' }">
                            <div class="logged-user" @click="authStore.logout()"> {{ authStore.user.email }} 
                                <li class="navbar-item">Logout</li>
                            </div>
                        </router-link>
                    </li>
                </ul>
                <div class="bottom-sidebar">
                    <ul class="footer-icons">
                        <li class="icon">
                            <fa :icon="['fab', 'facebook']" />
                        </li>
                        <li class="icon">
                            <fa :icon="['fab', 'instagram']" />
                        </li>
                        <li class="icon">
                            <fa :icon="['fab', 'twitter']" />
                        </li>
                    </ul>
                    <div>
                        <h1>2022 © All Rights Reserved</h1>
                    </div>
                </div>
            </span>
        </h1>
        <span class="collapse-icon" :class="{ 'rotate-180': coll }" @click="toggle">
            <i class="fas fa-angle-double-left"></i>
        </span>
    </div>

</template>
<script setup>
import { collapsed, sidebarWidth, toggleSidebar } from './state'
import { useAuthStore } from '../store/auth'

const authStore = useAuthStore();

const coll = collapsed;
const toggle = toggleSidebar;
const barWidth = sidebarWidth;


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Lobster&family=Oswald&family=Roboto&display=swap');

.logo {
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

.logo-title {
    color: black;
    font-family: 'Lobster', serif;
    font-size: 30px;
}

.top-icons {
    margin-top: 100px;
}

.icon-top:hover {
    color: #b55f09;
    transform: scale(1.1);
}

.navbar-item {
    color: #7f3f00;
}

.navbar-item:hover {
    color: #b55f09;
    transform: scale(1.1);
}

.logged-user {
    color: #442200;
}

.sidebar {
    background-color: #DAA520;

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;

    transition: 0.7s ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon {
    position: absolute;
    bottom: -1;
    padding: 0.75em;

    color: black;

    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}

.bottom-sidebar {
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 480px;

}

h1 {
    text-align: center;
}
</style>