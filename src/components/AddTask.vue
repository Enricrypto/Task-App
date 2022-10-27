<template>
    <div class="new-post mt-5">
        <form class="add-task" @submit.prevent="onSubmit" :to="{ name: 'home' }">
            <div class="field">
                <label class="label">New Post</label>
                <div class="control">
                    <input v-model="title" class="input" type="text" placeholder="Title">
                </div>
            </div>
            <div class="control">
                <textarea v-model="message" class="textarea" placeholder="Write your post"></textarea>
            </div>
            <div class="control mt-3">
                <button type="submit" class="mt-2 button is-info is-fullwidth">Send</button>
            </div>
        </form>
    </div>
</template>
<script setup>

import { ref } from 'vue'
import { useTaskStore } from '../store/task'
import { useAuthStore } from '../store/auth'
import { newTask } from '../API'

const taskStore = useTaskStore();
const authStore = useAuthStore();

const message = ref('');
const title = ref('');
const id = authStore.id;

const onSubmit = async () => {
    const response = await newTask(id, title.value, message.value)
    const task = { title: title.value, description: message.value, created_at: new Date() }
    taskStore.addTask(task)
    message.value = ''
    title.value = ''
}
</script>

<style scoped>
.add-task {
    width: 400px;
}

.new-post {
    display: flex;
    justify-content: center;
}

.label {
    color: #FFFF;
}
</style>