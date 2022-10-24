<template>

    <div class="section-container">
        <section class="login-post">
            <div class="login">
                <div v-if="!authStore.isAuth" class="message is-danger">
                    <div class="message-body">
                        Start your session <br>
                        <router-link :to="{ name: 'login' }">
                            Go to Login
                        </router-link>
                    </div>
                </div> 
            </div>
            <div class="columns is-multiline is-centered is-mobile">
                <AddTask />
            </div>
        </section>
    </div>
        <div class="columns is-multiline is-centered is-mobile">
            <div class=" cards column is-8-mobile is-6-tablet is-3-desktop is-3-widescreen"
                v-for="task in taskStore.tasks" :key="task.id">
                <Card :task="task" />
            </div>
        </div>
</template>
<script setup>
import { ref, onMounted, pushScopeId } from 'vue'
import { useAuthStore, useTaskStore } from '../store'
import AddTask from '../components/AddTask.vue'
import Card from '../components/Card.vue'
import { deleteTask, getTasks, statusTask } from '../API'
import router from '../router';


const authStore = useAuthStore();
const taskStore = useTaskStore();

const tasks = ref('');
let tareas = []


onMounted(() => {
    //await getTasks()
    taskStore.setTask()
    //taskStore.updateTask()
})

</script>
<style scoped>
.cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}

.section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}


</style>