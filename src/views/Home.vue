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
                <div class="section" v-for="task in taskStore.tasks" :key="task.id">
                    <div>{{task.title}} - {{task.created_at}} </div>
                    <div>{{task.description}}</div>
                    <button @click="eliminateTask(task.id)">Eliminar</button>
                    <button @click="doneTask(task.id)">Marcar como hecho</button>
                    <button @click="editTask(task.id)">Editar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, pushScopeId } from 'vue'
import { useAuthStore, useTaskStore } from '../store'
import AddTask from '../components/AddTask.vue'
import { deleteTask, getTasks, statusTask } from '../API'
import router from '../router';

const authStore = useAuthStore();
const taskStore = useTaskStore();

const tasks = ref('');
let tareas = []

onMounted(() => {
    //await getTasks()
    taskStore.setTask()
    taskStore.updateTask()
})

const eliminateTask = async (id) => {
        taskStore.setTask()
        await deleteTask(id)
        taskStore.deleteTask(id)
    }

const doneTask = async (id) => {
    let estado =  true
    //taskStore.updateTask()
    await statusTask(id, estado)
}


// const editTask = async (id) => {
// //     taskStore.updateTask()
// //     await updateTask(id)
// //         taskStore.updateTask(id)
// //     }


</script>
<style scoped>

</style>