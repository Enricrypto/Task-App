<template>
    <router-link class="logged-in" :to="{ name: 'home' }">
        <div class="navbar-item" @click="authStore.logout()">
            <fa icon="fa-right-from-bracket" />
        </div>
    </router-link>
</template>

<script setup>
</script>

<style scoped>

</style>