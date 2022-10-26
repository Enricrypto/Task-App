<template>
  <Navbar />
  <router-view></router-view>
</template>
<script setup>

import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import { useAuthStore } from './store/auth'

const auth = useAuthStore(); 
onMounted(async () => {
  //const id = await logIn();
  //newTask({
  //user_id: id,
  //title: 'Titulo',
  //description: 'Descripcion de otro task'
  //})
})

</script>
<style scoped>

</style>