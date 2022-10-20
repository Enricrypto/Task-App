<template>

    <div class="section">
        <div class="container">
            <article v-if="!authStore.isAuth" class="message is-danger">
                <div class="message-body">
                    Iniciar sesion en la APP <br>
                    <router-link :to="{name: 'login'}">
                        Ir a Login
                    </router-link>
                </div>
            </article>
            <div v-else>
                <div class="title"> Hola {{authStore.user.email}} </div>
                <button @click="authStore.logout()" class="button is-danger">Cerrar Sesión</button>
                <div>
                    <AddTask />
                </div>
                <div class="section" v-for="task in tasks.data">
                    <div>{{task.title}} - {{task.created_at}} </div>
                    <div>{{task.description}}</div>
                    <button>Eliminar</button>
                    <button>Marcar como hecho</button>
                </div>
            </div>

        </div>
    </div>

</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore, useTaskStore } from '../store'
import AddTask from '../components/AddTask.vue'
import { getTasks, deleteTask } from '../API'

const authStore = useAuthStore();
const taskStore = useTaskStore(); 

const tasks = ref('');

const loadTasks = async () => {
    tasks.value = await getTasks()
    console.log(tasks.value)
}

onMounted(() => {
    loadTasks()
})

</script>
<style scoped>

</style>