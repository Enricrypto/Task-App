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
import { supabase } from '../API'

const taskStore = useTaskStore();
const authStore = useAuthStore();

const message = ref('');
const title = ref('');
const id = authStore.id;

const onSubmit = async () => {
    const task = {
        user_id: id,
        title: title.value,
        description: message.value,
    }
    const response = await supabase.from('task')
        .insert({
            user_id: id,
            title: title.value,
            description: message.value,
        })
}

</script>

<style scoped>

</style>