<script setup>

</script>


<template>
  

  <div class="container" style="padding: 50px;">
    <div class="jumbotron">
      <h1> Contact</h1>
    </div>
    <!-- <form action="https://backendform.com/sendform.php/leightonmiguelweb@gmail.com" method = "post" > -->
    <form action="https://backendform.com/sendform.php/leightonmiguelweb@gmail.com" method = "get" >
      <label for="name" class="form-label">Name</label>
      <input type = text name="name" id="name" class="form-control" >
      <label for="email" class="form-label">Email</label>
      <input type = email name="email" id="email" class="form-control" >
      <label for="message" class="form-label">Message</label>
      <input type = text name="message" id="message" class="form-control" >
      <!-- <button type=submit class="btn btn-primary mb-2" style= "margin-top: 15px; padding: 5px;">Submit</button> -->
      <button type="submit" class="btn btn-light" style= "margin-top: 15px; padding: 5px; color: #273f53">Submit</button>
      <input type=hidden name="fromwebsite" value="cgt">

      <input name="redirect" value=https://collegegradetool.com style="display: none;">
    

    </form>
    <div style="margin-top: 10px;">
      This form uses my website <a href="https://backendform.com">backendform.com</a> for all form submissions.
    </div>
    
    
  </div>
</template>

<style>


</style>
