<template>
    <div class="mt-5">
        <form @submit.prevent="onSubmit">
            <div class="field">
                <label class="label">Titulo</label>
                <div class="control">
                    <input v-model="title" class="input" type="text" placeholder="titulo">
                </div>
            </div>
            <div class="control">
                <textarea v-model="message" class="textarea" placeholder="Escribe un post"></textarea>
            </div>
            <div class="control">
                <button type="submit" class="mt-2 button is-info">Enviar</button>
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
    const task = {title:title.value, description:message.value, created_at: new Date()}
    taskStore.addTask(task)
    message.value = ''
    title.value = ''
}


</script>

<style scoped>

</style>