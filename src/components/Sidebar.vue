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
                <div class="open-sidebar">
                    <div class="top-sidebar">
                        <div class="logo">
                            <div class="icon-pen">
                                <fa icon="fa-pen-nib" />
                            </div>
                            <div class="logo-title">
                                <h1>Noted</h1>
                            </div>
                        </div>
                        <div class="sidebar-menu">
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
                            </ul>
                            <router-link class="logged-in" :to="{ name: 'home' }">
                                <div class="logged-user" @click="authStore.logout()"> {{ authStore.user.email }}
                                    <li class="navbar-item">Logout</li>
                                </div>
                            </router-link>
                        </div>
                    </div>
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

.icon-pen {
    color: #05445E;
}

.logo {
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    gap: 5px;
}

.logo-title {
    color: #05445E;
    font-family: 'Lobster', serif;
    font-size: 30px;
}

.top-icons {
    margin-top: 100px;
}

.icon-top:hover {
    color: #189AB4;
    transform: scale(1.1);
}

.navbar-item {
    color: #189AB4;
}

.navbar-item:hover {
    color: #05445E;
    transform: scale(1.1);
}

.logged-user {
    color: #189AB4;
}

.sidebar {
    background-color: #D4F1F4;

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}

.collapse-icon {
    position: absolute;
    bottom: -1;
    padding: 0.75em;

    color: #189AB4;

    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}

.bottom-sidebar {
    color: #189AB4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.open-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 840px;
}

.sidebar-menu {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logged-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1 {
    text-align: center;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    .open-sidebar {
        height: 1100px;
    }
}

@media only screen and (min-device-width: 414px) and (max-device-width: 736px) {

    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

}
</style>

