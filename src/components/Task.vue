<template>
    <div>
        <div class="cards">
            <div class="section">
                <div class="create-note">
                    <button class="add-message cards" @click="toggleEdit">Create a Note
                        <fa icon="plus" />
                    </button>
                </div>
            </div>
            <div class="modal" :class="{ 'is-active': editMode }">
                <div @click="toggleEdit" class="modal-background"></div>
                <div class="modal-content">
                    <AddTask />
                </div>
                <button @click="toggleEdit" class="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
        <div class="section">
            <div class="container">
                <div class="columns is-multiline">
                    <div class="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen"
                        v-for="task in taskStore.tasks" :key="task.id">
                        <Card :task="task" />
                    </div>
                </div>
            </div>
        </div>
    </div>
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

.create-note {
    display: flex; 
    justify-content: center; 
}

</style>