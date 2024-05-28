<template>
    <ul>
        <li class="
        mt-2
        text-tWhite
        px-[14px] py-[11px] bg-bgTask rounded-[16px] 
        flex flex-row items-center
        font-bold
        cursor-pointer
        " 
        v-for="tasks in tasks" :key="tasks.id"
        @click="toggleTaskComplete(tasks.id)"
        >
        <span class="
        bg-btnOrange rounded-[16px] 
        text-btnOrange mr-2"
        :class="{
            'bg-bgComplete': tasks.completed}"
        >.</span>
        <span :class="{'line-through text-tGray': tasks.completed}" >{{ tasks.text }}</span>
        <svg class="
        stroke-iconsTask cursor-pointer 
        hover:stroke-btnOrange
        fixed ml-[546px]
        md:ml-[310px]
        " @click="deleteTask(tasks.id)" xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21" fill="none">
            <path d="M12.7963 5.05541V4.32948C12.7963 3.31309 12.7963 2.8049 12.5985 2.41669C12.4245 2.07521 12.1469 1.79758 11.8054 1.62358C11.4172 1.42578 10.909 1.42578 9.89259 1.42578H8.44074C7.42435 1.42578 6.91615 1.42578 6.52794 1.62358C6.18646 1.79758 5.90883 2.07521 5.73484 2.41669C5.53704 2.8049 5.53704 3.31309 5.53704 4.32948V5.05541M7.35185 10.0462V14.5832M10.9815 10.0462V14.5832M1 5.05541H17.3333M15.5185 5.05541V15.2184C15.5185 16.743 15.5185 17.5053 15.2218 18.0876C14.9608 18.5998 14.5444 19.0162 14.0322 19.2772C13.4498 19.5739 12.6876 19.5739 11.163 19.5739H7.17037C5.64578 19.5739 4.88349 19.5739 4.30117 19.2772C3.78896 19.0162 3.37251 18.5998 3.11152 18.0876C2.81481 17.5053 2.81481 16.743 2.81481 15.2184V5.05541" stroke-width="1.81481" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        tasks: Array
    },
    methods: {
        deleteTask(id){
            this.$emit('delete', id)
        },
        toggleTaskComplete(id){
            this.$emit('toggle-complete', id)
        }
    }


}
</script>
