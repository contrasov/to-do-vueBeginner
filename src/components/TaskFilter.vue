<template>
    <section class="flex flex-row gap-36 md:gap-4 md:flex-col md:items-start items-center">
        <div class="font-semibold text-tGray flex flex-row items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                <path d="M28 16.5001L12 16.5001M28 8.50008L12 8.50008M28 24.5001L12 24.5001M6.66667 16.5001C6.66667 17.2365 6.06971 17.8334 5.33333 17.8334C4.59695 17.8334 4 17.2365 4 16.5001C4 15.7637 4.59695 15.1667 5.33333 15.1667C6.06971 15.1667 6.66667 15.7637 6.66667 16.5001ZM6.66667 8.50008C6.66667 9.23646 6.06971 9.83341 5.33333 9.83341C4.59695 9.83341 4 9.23646 4 8.50008C4 7.7637 4.59695 7.16675 5.33333 7.16675C6.06971 7.16675 6.66667 7.7637 6.66667 8.50008ZM6.66667 24.5001C6.66667 25.2365 6.06971 25.8334 5.33333 25.8334C4.59695 25.8334 4 25.2365 4 24.5001C4 23.7637 4.59695 23.1667 5.33333 23.1667C6.06971 23.1667 6.66667 23.7637 6.66667 24.5001Z" stroke="#3B3B3B" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h1 class="md:text-xs">To-do List</h1>
        </div>
        <div class="flex flex-row gap-2">
            <button 
            :class="{ 'bg-btnOrange text-tWhite': currentFilter === 'all' }"
            class="text-tGray font-semibold px-8 py-2 bg-btnColor hover:bg-btnOrange hover:text-tWhite rounded-[16px]" @click="setFilter('all')" >All</button>
            <button 
            :class="{ 'bg-btnOrange text-tWhite': currentFilter === 'done' }"
            class="text-tGray font-semibold px-8 py-2 bg-btnColor hover:bg-btnOrange hover:text-tWhite rounded-[16px]" @click="setFilter('done')" >Done</button>
            <button 
            :class="{ 'bg-btnOrange text-tWhite': currentFilter === 'undone' }"
            class="text-tGray font-semibold px-8 py-2 bg-btnColor hover:bg-btnOrange hover:text-tWhite rounded-[16px]" @click="setFilter('undone')" >Undone</button>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return {
            currentFilter: 'all'
        }
    },
    methods: {
        setFilter(value){
            this.currentFilter = value;
            this.$emit('filter', value)
        }
    }
}
</script>
