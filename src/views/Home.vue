<template>
    <div class="home-container">
        <section class="login-post">
            <div v-if="!authStore.isAuth" class="login">
                <div class="message is-danger">
                    <div class="message-body">
                        Start your session <br>
                        <router-link :to="{ name: 'login' }">
                            Go to Login
                        </router-link>
                    </div>
                </div>
            </div>
            <div v-else>
                <Task/>
            </div>
        </section>

    </div>
    <router-view />
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore, useTaskStore } from '../store'
import Task from '../components/Task.vue'
import AddTask from '../components/AddTask.vue'
import Card from '../components/Card.vue'

const authStore = useAuthStore();
const taskStore = useTaskStore();

const tasks = ref('');

onMounted(() => {
    //await getTasks()
    taskStore.setTask()
    //taskStore.updateTask()
})

const editMode = ref(false)

const toggleEdit = (id) => {
    editMode.value = !editMode.value;
}


</script>
<style scoped>
.cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}

.home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    min-height: 100vh;
    background: linear-gradient(-45deg, #0091E7, #005BEA, #04F9F2, #0000FF);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    padding-bottom: 50px;
}

.add-message.cards {
    background-color: #EBEBE8;
    gap: 10px;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}


.message-body {
    margin-top: 10px;
}

</style>