<script >

import { ref } from 'vue';

function input (name,val)
{
  this.name = name
  this.val=val;
}

export default
{
  data(){

    const cn = ref([ (new input("cn1",null))])  

    const g = ref([ (new input("g1",null))])  

    const w = ref([ (new input("w1",null))])

    let t = null;




    return{
      cn,
      g,
      w,
      t,
      
      
      

    }


  },
  methods:
  {
    calc(currentGrade, desiredGrade, finalExamWeight) {
    
    const finalExamWeightDecimal = finalExamWeight / 100;

    // Calculate the required final exam score
    const neededFinalExamGrade = (desiredGrade - (1 - finalExamWeightDecimal) * currentGrade) / finalExamWeightDecimal;

    // Check if the required final exam grade is within a valid range
    

    return neededFinalExamGrade;
    },

    resetForm(x,y,z)
    {
      for(var i =0;i<x.length;i++)
      {
        x[i].val=null
        y[i].val=null
        z[i].val=null
      }
    },
    letter(pg)
      {
        if(pg>=90)
      {
      if(pg>=97)
      {
        return "A+"

      }
      else if(pg>=93)
      {
        return "A"
      }
      else
      {
        return "A-"
      }


        }
      else if(pg>=80)
      {
        if(pg>=87)
        {
          return "B+"

        }
        else if(pg>=83)
        {
          return "B"
        }
        else
        {
          return "B-"
        }
      }
  else if(pg>=70)
  {
    if(pg>=77)
    {
      return "C+"

    }
    else if(pg>=73)
    {
      return "C"
    }
    else
    {
      return "C-"
    }
  }
  else if(pg>=60)
  {
    if(pg>=67)
    {
      return "D+"

    }
    else if(pg>=63)
    {
      return "D"
    }
    else
    {
      return "D-"
    }
  }
  else
  {
    return "F"

  }
    }

    
  }

}

</script>

<template>
  <div class="row justify-content-center">
  <div class=" py-5 col-12 col-lg-6 " >
    
    

      <h3> Final Exam Calculator</h3>
      <p>
        Calculate your grade in a class with different weighted categories.
      </p>

      <div class="input-group input-wrap input-group-xs mb-5 ">
        
         <form>
          <div class="row" >
            <div class="col-4">

              Current grade (%)
              <br>

              <div v-for="name in cn" :key="name">
                
                <input type="number" class="form-control" maxlength="20" :id="name.name" v-model="name.val">
                
              </div>
              

            </div>
            

            <div class="col-4">

              Final grade wanted (%)
              <br>

              <div v-for="grade in g" :key="grade">
                
                <input type="number" class="form-control" maxlength="7" :id="grade.name" v-model="grade.val">

                
              </div>

            </div>



            <div class="col-4">

              Final exam weight
              <br>

              <div v-for="weight in w" :key="weight">
                
                <input type="number" class="form-control" maxlength="7" v-model="weight.val">
                
              </div>
              
              
            </div>
          </div>
          <br>

          <div>
            <div class="row"  readonly >

              <div class="col-6">
                <div class="form-control" readonly style="padding: 10px;">
                   Final Grade Needed
                   <text style="font-weight: 700; float: right;">
                    {{ t }}%
                  </text>
                </div>
                <br>  
              </div>

              <div class="col-6">
                <div class="form-control" readonly style="padding: 10px;">
                   Letter
                   <text style="font-weight: 700; float: right;">
                    {{ l }}
                  </text>
                </div>
                <br>  
              </div>

              
              
            </div>
            
          </div>


          <button type="button" class="btn btn-info"
          @click="t = (calc(cn[0].val,g[0].val,w[0].val)).toFixed(2), l=letter(t)">
            Submit
          
          </button>
          <button @click="resetForm(cn,w,g),l=null,t=null" type="button" class="btn btn-danger" style="margin-left: 10px;">
            Reset
          </button>
          
          
         </form>
          
      </div>
      
    
 

  </div>
  <div class="col-12 col-lg-8  py-5 ">
    <div style="text-align: center; line-height: 2;">
      
      <div class="row justify-content-center">
        
          <h5> How is the final exam grade needed calculated?</h5>
      
          <p>
            The grade needed on your final exam to get your desired grade is calculated by your desired grade minus the remainder weight of your current grade multiplied by your current grade all divided by the weight of your final.

For example, if I currently have a 70% in my class with my desired final grade being 80% and my final exam weighing 50% I would do (80/100 - (100-50)/100 * 70/100) / (50/100) which equals 0.9. Multiply 0.9 by 100 to get to the percentage grade form which is 90%.
          </p>
        
      </div>
      
    </div>
  </div>
</div>

</template>

<style>
</style>