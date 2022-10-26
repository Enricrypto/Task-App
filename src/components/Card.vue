<template>
    <div class="card">
        <div class="container" v-if="estado = !task.isCreated">
            <div class="created-card" v-if="!editMode">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{ authStore.user.email }}</p>
                    </div>
                </div>
                <div>
                    {{ props.task.title }}
                </div>
                <div>
                    {{ props.task.description }}
                </div>
                <time>
                    {{ props.task.created_at }}
                </time>
                <div class="created-card buttons">
                    <button @click="eliminateTask(props.task.id)">
                        <fa icon="trash" />
                    </button>
                    <button @click="doneTask(props.task.id)">
                        <fa icon="check" />
                    </button>
                    <button @click="toggleEdit(props.task.id)">
                        <fa icon="pen-to-square" />
                    </button>
                </div>
            </div>
            <div v-else>
                <div class="card-edit">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{{ authStore.user.email }}</p>
                        </div>
                    </div>
                    <input v-model="title" type="text" :placeholder="props.task.title">
                    <br>
                    <textarea v-model="description" rows="4" :placeholder="props.task.description"></textarea>
                    <br>
                    <div class="card-edit buttons">
                        <button @click="editedTask(props.task.id)">
                            <fa icon="floppy-disk" />
                        </button>
                        <button @click="toggleEdit(props.task.id)">
                            <fa icon="xmark" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-done" v-else>
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">Good Job!</p>
                </div>
                <br>
                <div class="done-icon">
                    <fa icon="circle-check" />
                </div>
            </div>
            <div class="card-done buttons">
                <button @click="eliminateTask(props.task.id)">
                    <fa icon="trash" />
                </button>
                <button @click="undoTask(props.task.id)">
                    <fa icon="rotate-left" />
                </button>
            </div>
        </div>
    </div>


</template>
<script setup>
import { ref, defineProps } from 'vue'
import { useTaskStore, useAuthStore } from '../store'
import { deleteTask, statusTask, updateTask } from '../API'

const editMode = ref(false)

const taskStore = useTaskStore();
const authStore = useAuthStore();

const props = defineProps({
    task: Object
})

const eliminateTask = async (id) => {
    taskStore.setTask()
    await deleteTask(id)
    taskStore.deleteTask(id)
}

let res;
let estado = ref('')
let title = ref('')
let description = ref(res)

const toggleEdit = (id) => {
    editMode.value = !editMode.value
    // res = taskStore.updateTask(id)
    // console.log(id)
    // console.log(res);
}

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
    console.log(await taskStore.setTask())
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

button:hover {
    cursor: pointer;
    transform: scale(1.5);
}

.card-done {
    width: 260px;
}

.card-done .buttons {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
}

.card-edit {
    display: flex;
    flex-direction: column;
}

.card-edit .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.media {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
}

.done-icon {
    color: #B88600; 
    transform: scale(2.5);
}
</style>
