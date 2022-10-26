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
                <button class="add-message" @click="toggleEdit">Create a Note
                    <fa icon="plus" />
                </button>
                <div class="modal" :class="{'is-active':editMode}">
                    <div @click="toggleEdit" class="modal-background"></div>
                    <div class="modal-content">
                        <AddTask />
                    </div>
                    <button @click="toggleEdit" class="modal-close is-large" aria-label="close"></button>
                </div>
            </div>
        </section>
    </div>
    <div class="columns is-multiline is-centered is-mobile">
        <div class=" cards column is-8-mobile is-6-tablet is-3-desktop is-3-widescreen" v-for="task in taskStore.tasks"
            :key="task.id">
            <Card :task="task" />
        </div>
    </div>
    <div>
    </div>
    <router-view />
    <!-- <Footer></Footer> -->
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore, useTaskStore } from '../store'
import AddTask from '../components/AddTask.vue'
import Card from '../components/Card.vue'
import Footer from '../components/Footer.vue'

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

.section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.message-body {
    margin-top: 10px;
}

.add-message {
    background-color: #FFFF;
    border-radius: 10px;
    border: none;
    height: 40px;
    width: 140px; 
    margin-top: 25px; 
}

.add-message:hover {
    cursor: pointer;
    background-color: #CD853F; 
    font-weight: 600;
}

@media screen and (max-width: 420px) {
.modal-content {
    width: 280px; 
}
}
</style>