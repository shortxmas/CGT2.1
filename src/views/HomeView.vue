<script>


// import grade from '../components/grade.vue';
import gpa from '../components/gpa.vue';
import final from '../components/final.vue';


  export default 
  {
    data() {
        return {
            gradevis:true,
            gpavis :false,
            finalvis:false,
        };
    },
    components: {gpa,final}
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
  
  
    <!-- <grade/> -->
  </div>

  <div v-show="gpavis">
    <gpa/>
  </div>

  <div v-show="finalvis">
    <final/>
  </div>

</div>






  
  
  
  

 
</template>


