<template>
    <div class="mt-5">
        <form class="add-task" @submit.prevent="onSubmit">
            <div class="field">
                <label class="label">Post</label>
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
const email = authStore.user.email;

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
</style>