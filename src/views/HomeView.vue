<script>


import Grade from '../components/grade.vue'
import Gpa from '../components/gpa.vue';
import Final from '../components/final.vue';



 

  export default 
  {
    data() {
        return {
            gradevis:true,
            gpavis :false,
            finalvis:false,
        };
    },
    components: { Grade, Gpa, Final }
};
</script>

<template>
  

<div class="container" style="padding: 50px;">
  <h4>
    Calculating your grades has never been easier. These simple college grading tools help you become more aware of your grades and ultimately help you achieve your academic goals.
  </h4>
  <br>
  <ul class="nav nav-tabs">
  
  <li class="nav-item"  style="padding: 5px;">
    <button @click="gradevis = true,gpavis=false,finalvis=false" class="btn btn-light">Grade Calculator</button>
  </li>
  <li class="nav-item"  style="padding: 5px;">
    <button @click="gradevis = false,gpavis=true,finalvis=false" class="btn btn-light">GPA Calculator</button>
  </li>
  
  <li class="nav-item"  style="padding: 5px;">
    <button @click="gradevis = false,gpavis=false,finalvis=true" class="btn btn-light">Final Grade Calculator</button>
  </li>
  </ul>

  <div v-show="gradevis">
  <Grade/>
  
  
  </div>

  <div v-show="gpavis">
    <Gpa/>
  </div>

  <div v-show="finalvis">
    <Final/>
  </div>

</div>






  
  
  
  

 
</template>


