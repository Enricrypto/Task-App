<template>
  <Navbar />
  <router-view></router-view>
</template>
<script setup>

import { onMounted } from 'vue';
import { logIn } from './API'
import Navbar from './components/Navbar.vue';

onMounted(async () => {
  //const id = await logIn('eibarraf@gmail.com', '1234567');
  //newTask({
  //user_id: id,
  //title: 'Titulo',
  //description: 'Descripcion de otro task'
  //})
})


</script>
<style scoped>

</style>