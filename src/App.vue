<template>
<main class="flex justify-center mt-6">
  <section>
    <div class="md:mr-2 md:ml-2">
      <Icons/>
      <TaskInput/> 
      <TaskList/>
    </div>
  </section>
</main>
</template>

<script setup>
import Icons from './components/Icons.vue'
import TaskInput from './components/TaskInput.vue'
import TaskList from './components/TaskList.vue'
</script>
