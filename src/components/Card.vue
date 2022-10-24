<template>
    <div class="card">
        <div class="container" v-if="estado = !task.isCreated">
            <div class="created-card" v-if="!editMode">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                    </div>
                </div>
                <div>
                    {{ props.task.title }}
                </div>
                <time>
                    {{ props.task.created_at }}
                </time>
                <div>{{ props.task.description }}</div>
                <div class="created-card buttons">
                    <button @click="eliminateTask(props.task.id)">
                        <fa icon="<fa-regular fa-trash" />
                    </button>
                    <button @click="doneTask(props.task.id)">
                        <fa icon="check" />
                    </button>
                    <button @click="toggleEdit(props.task.id)">
                        <fa icon="fa-solid fa-pen-to-square" />
                    </button>
                </div>
            </div>
            <div v-else>
                <div class="card-edit">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                    <input v-model="title" type="text">
                    <br>
                    <textarea v-model="description" rows="20"></textarea>
                    <br>
                    <div class="card-edit buttons">
                        <button @click="editedTask(props.task.id)">
                            <fa icon="fa-floppy-disk" />
                        </button>
                        <button @click="toggleEdit(props.task.id)">
                            <fa icon="fa-xmark" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-done" v-else>
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">John Smith</p>
                    <p class="subtitle is-6">@johnsmith</p>
                </div>
            </div>
            <div>
                {{ props.task.title }}
            </div>
            <time>
                {{ props.task.created_at }}
            </time>
            <div>{{ props.task.description }}</div>
            <div class="card-done buttons">
                <button @click="eliminateTask(props.task.id)">
                    <fa icon="<fa-regular fa-trash" />
                </button>
                <button @click="undoTask(props.task.id)">
                    <fa icon="fa-rotate-left" />
                </button>
            </div>
        </div>
    </div>


</template>
<script setup>
import { ref, defineProps } from 'vue'
import { useTaskStore } from '../store'
import { deleteTask, statusTask, updateTask } from '../API'

const editMode = ref(false)

const toggleEdit = () => {
    editMode.value = !editMode.value
}

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
.card {
    width: 280px;
    height: 280px;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    transition: 300ms;
    margin-top: 30px;
    display: flex;
    align-items: center;
}

.card:hover {
    transform: scale(1.1);
}

.created-card .buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
}

button {
    background-color: transparent;
    border: none;
}

.card-done {
    background-color: orange;
}

.card-done .buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
}

.card-edit {
    height: 204px;
    background-color: aquamarine;
    display: flex;
    flex-direction: column;
}

.card-edit .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>
