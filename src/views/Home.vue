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
            <div v-else class="columns is-multiline is-centered is-mobile">
                <button class="add-message" @click="toggleEdit">Create a Note
                    <fa icon="plus" />
                </button>
                <div class="modal" :class="{ 'is-active': editMode }">
                    <div @click="toggleEdit" class="modal-background"></div>
                    <div class="modal-content">
                        <AddTask />
                    </div>
                    <button @click="toggleEdit" class="modal-close is-large" aria-label="close"></button>
                </div>
                <div class="columns is-multiline is-centered is-mobile">
                    <div class=" cards column is-12-mobile is-6-tablet is-6-desktop is-4-widescreen"
                        v-for="task in taskStore.tasks" :key="task.id">
                        <Card :task="task" />
                    </div>
                </div>
            </div>
        </section>

    </div>
    <router-view />
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore, useTaskStore } from '../store'
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

.add-message {
    background-color: #D4F1F4;
    border-radius: 10px;
    border: none;
    height: 40px;
    width: 140px;
    margin-top: 25px;
}

.add-message:hover {
    cursor: pointer;
    background-color: #189AB4;
    font-weight: 600;
}

@media only screeen and (min-device-width: 820px) and (max-device-width: 1180px) {
    .login {
        margin-top: 20px;
    }
}

@media only screen and (min-device-width: 414px) and (max-device-width: 736px) {
    .modal-content {
        width: 280px;
    }

    .login-post {
        width: 200px;
    }

}
</style>