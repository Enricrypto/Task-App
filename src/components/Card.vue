<template>

        <div class="card-done" v-if="estado = !task.isCreated">
            <div v-if="!editMode">
                <div>{{ props.task.title }} - {{ props.task.created_at }} </div>
                <div>{{ props.task.description }}</div>
                <button @click="eliminateTask(props.task.id)">Eliminar</button>
                <button @click="doneTask(props.task.id)">Marcar como hecho</button>
                <button @click="toggleEdit(props.task.id)">Editar</button>
            </div>
            <div v-else>
                <input v-model="title"  type="text">
                <textarea v-model="description" ></textarea>
                <button @click="editedTask(props.task.id)">Guardar</button>
                <button @click="toggleEdit(props.task.id)">Cancel</button>
            </div>
        </div>
        <div class="card-edit" v-else>
            <div>{{ props.task.title }} - {{ props.task.created_at }} </div>
            <div>{{ props.task.description }}</div>
            <button @click="eliminateTask(props.task.id)">Eliminar</button>
            <button @click="undoTask(props.task.id)">Deshacer</button>
        </div>

</template>
<script setup>
import { ref, defineProps, onMounted, pushScopeId } from 'vue'
import { useAuthStore, useTaskStore } from '../store'
import AddTask from '../components/AddTask.vue'
import { deleteTask, getTasks, statusTask, updateTask } from '../API'

const editMode = ref(false)

const toggleEdit = () => {
    editMode.value = !editMode.value
}

const authStore = useAuthStore();
const taskStore = useTaskStore();

const props = defineProps({ 
    task: Object
})

const eliminateTask = async (id) => {
    taskStore.setTask()
    await deleteTask(id)
    taskStore.deleteTask(id)
}

let estado = ref('')
let title = ref('')
let description = ref('')

const doneTask = async (id) => {
    estado = true
    //taskStore.updateTask()
    await statusTask(id, estado)
    taskStore.setTask()
}

const undoTask = async (id) => {
    estado = false
    //taskStore.updateTask()
    await statusTask(id, estado)
    taskStore.setTask()
}

const editedTask = async (id) => {
    await updateTask(id, title.value, description.value)
    taskStore.setTask()
    toggleEdit()
}




</script>
<style scoped>

.card-done {
    border: 1px solid black; 
    background-color: yellow;
    border-radius: 5px;
    padding: 5px; 
    box-shadow: 5px, 5px; 
}

</style>
