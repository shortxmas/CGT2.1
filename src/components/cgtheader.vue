



<template>


  <div class="navbar navbar-expand-lg navbar-light  bg-light">
    <div class="container">
      <a class="navbar-brand" style="color: #5f91bb;">
        
        <RouterLink to="/" class="nav-item"><a class="nav-link"><h2 style="color: #5f91bb;">collegegradetool.com</h2></a></RouterLink>

      </a>
      <button class="navbar-toggler" data-bs-toggle = "collapse"
      data-bs-target = "#nav" aria-controls = "nav" aria-label=
      "Expand Navigation">
        <span class="navbar-toggler-icon"></span>
  
      </button>
      <div class= "collapse navbar-collapse"  id="nav">
        <ul class="navbar-nav navbar-right nav-routes">
            
          
          

          <li class="nav-item">
            <RouterLink to="/" class="nav-item"><a class="nav-link">Grade Tools </a></RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink to="/contact" class="nav-item"><a class="nav-link">Contact</a></RouterLink>
          </li>

          
          
          
        </ul>
      </div>
      <span class="navbar-text" style="color: #5f91bb; display: inline;">
        <h6>
          For Students.
        </h6>
      </span>
        
    </div>
    
    
  </div>
  
</template>

<script setup >
import { RouterLink } from 'vue-router';



</script>

<style scoped>

.nav-item
{
  text-decoration: none;
}


</style>