<template>
    <div class="card">
        <div class="container" v-if="estado = !task.isCreated">
            <div class="created-card" v-if="!editMode">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-5">{{ authStore.user.email }}</p>
                    </div>
                </div>
                <div class="card-content">
                    <div>
                        {{ props.task.title }}
                    </div>
                    <div>
                        {{ props.task.description }}
                    </div>
                    <time>
                        {{ props.task.created_at }}
                    </time>
                </div>
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
                            <p class="title is-4">Edit Note!</p>
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
        <div class="carta" v-else>
            <div>
                <div class="container">
                    <div class="media card-done">
                        <div>
                            <p class="title is-4">Good Job!</p>
                        </div>
                        <div class="done-icon">
                            <fa icon="circle-check" />
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

.media.card-done {
min-height: 250px;
min-width: 280px; 
display: flex;
flex-direction: column; 
justify-content: space-around; 
align-items: center; 
margin-left: auto; 
margin-right: auto; 
}

.card {
    min-width: 280px;
    min-height: 280px;
    background-color: #EBEBE8;
    border-radius: 10px;
    padding: 10px;
    transition: 300ms;
    margin-top: 30px;
    display: flex;
    align-items: center;
    -webkit-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.75);
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

.card-done.buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
    width: 100px;
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
    color: #189AB4;
    transform: scale(2.5);
}

.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
