<script setup>
import { RouterView } from 'vue-router'
import cgtheader from "./components/cgtheader.vue"
</script>

<template>

  <header>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
  </header>
  
  
  <cgtheader/>
  <RouterView />

</template>

<style>

</style>
