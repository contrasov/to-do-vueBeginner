<template>
    <task-filter @filter="setFilter"></task-filter>
    <div class="flex flex-row gap-2 mt-6 mb-5">
        <input class="
        text-tWhite bg-transparent 
        rounded-[16px] border-[3px] border-inputBorderColor focus:border-tGray 
        w-full py-2 px-8
        focus:outline-none placeholder:text-inputTextColor"
        v-model="taskText" @keyup.enter="addTask" placeholder="Add new task..." maxlength="50">
        <button class="
        text-tGray font-semibold px-8 py-2 bg-btnColor 
        hover:bg-btnOrange hover:text-tWhite rounded-[16px]
        md:text-xs md:roudend-[10px]
        " @click="addTask">Add</button>
    </div>
    <task-list 
    :tasks="TaskFilter.slice().reverse()" 
    @delete="deleteTask"
    @toggle-complete="toggleTaskComplete"
    ></task-list>
</template>

<script>
import TaskList from './TaskList.vue';
import TaskFilter from './TaskFilter.vue'

export default {
    components:{
        TaskList,
        TaskFilter
    },
    data(){
        return {
            taskText: '',
            filter: 'all' ,
            tasks: []
        }
    },
    computed: {
        TaskFilter(){
            if(this.filter == 'done'){
                return this.tasks.filter(tasks => tasks.completed);
            } else if (this.filter == 'undone'){
                return this.tasks.filter(tasks => !tasks.completed)
            } else {
                return this.tasks;
            }
            
        }
    },
    methods: {
        setFilter(value){
            this.filter = value
        },
        addTask(){
            if(this.taskText.trim() !== '' ){
                this.tasks.push({
                    id: Date.now(),
                    text: this.taskText,
                    completed: false
                });
                this.taskText = '';
            }
        },
        deleteTask(id){
            this.tasks = this.tasks.filter(tasks => tasks.id !== id);
        },
        toggleTaskComplete(tasksId){
            const tasks = this.tasks.find(tasks => tasks.id == tasksId);
            if (tasks) {
                tasks.completed = !tasks.completed
            }
        }
    }
}
</script>
