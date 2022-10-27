<template>
  <Sidebar/>
  <div :style="{ 'margin-left' : barWidth }">
  <router-view />
</div>
</template>
<script setup>

import { onMounted } from 'vue';
import { useAuthStore } from './store/auth'
import Sidebar from './components/Sidebar.vue'
import { sidebarWidth } from './components/state'

const barWidth = sidebarWidth;

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