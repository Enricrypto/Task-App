<template>
  <h1>Task App</h1>
  <ul>
    <li><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
    <li><RouterLink :to="{name: 'login'}">Login</RouterLink></li>
  </ul>
  <router-view></router-view>
</template>
<script setup>
</script>
<style scoped>
</style>