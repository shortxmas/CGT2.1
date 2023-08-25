<script>
import { ref } from 'vue';

function input (name,val)
{
  this.name = name
  val;
}




export default{
  data(){

    const cn = ref([ (new input("cn1",null)),(new input("cn2",null)),
    (new input("cn3",null)),(new input("cn4",null)),(new input("cn5",null)),
    (new input("cn6",null)),(new input("cn7",null)),  ])  

    const g = ref([ (new input("g1",null)),(new input("g2",null)),
    (new input("g3",null)),(new input("g4",null)),(new input("g5",null)),
    (new input("g6",null)),(new input("g7",null)),  ])  

    const w = ref([ (new input("w1",null)),(new input("w2",null)),
    (new input("w3",null)),(new input("w4",null)),(new input("w5",null)),
    (new input("w6",null)),(new input("w7",null)),  ])

    let t = null;
    let l;
    


    return{
      cn,
      g,
      w,
      t,
      l,
      
      

    }
    

  },
  methods:{
    resetForm(x,y)
    {
      for(var i =0;i<x.length;i++)
      {
        x[i].val=null
        y[i].val=null
      }
    },
    calc (g,w)
    {
      let ret = null;
      for(var i =0;i<w.length;i++)
      {
        if(g[i].val != null && w[i].val !=null)
        {
          ret = ret + ((g[i].val/100) * w[i].val);
          
        }

        
      }

      return ret;
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
    
    

      <h3> Grade Calculator </h3>
      <p>
        Calculate your grade in a class with different weighted categories.
      </p>

      <div class="input-group input-wrap input-group-xs mb-5 ">
        
         <form>
          <div class="row" >
            <div class="col-6">

              Category name (optional)
              <br>

              <div v-for="name in cn" :key="name">
                
                <input type="text" class="form-control" maxlength="20" :id="name.name" v-model="name.val">
                
              </div>
              

            </div>
            

            <div class="col-3">

              Grade (%)
              <br>

              <div v-for="grade in g" :key="grade">
                
                <input type="number" class="form-control" maxlength="7" :id="grade.name" v-model="grade.val">
                
              </div>

            </div>



            <div class="col-3">

              Weight (%)
              <br>

              <div v-for="weight in w" :key="weight">
                
                <input type="number" class="form-control" maxlength="7" :id="weight.w" v-model="weight.val">
                
              </div>
              
              
            </div>
          </div>
          <br>

          <div>
            <div class="row" readonly >

              <div class="col-6">
                <div class="form-control" readonly style="padding: 10px;">
                   %
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
          @click="t = (calc(w,g)).toFixed(2), l=letter(t)">
            Submit
          
          </button>
          <button @click="t=null,l=null,resetForm(w,g)" type="button" class="btn btn-danger" style="margin-left: 10px;">
            Reset
          </button>
          
          
         </form>
          
      </div>
      
    
 

  </div>
  <div class="col-12 col-lg-8  py-5 ">
    <div style="text-align: center; line-height: 2;">
      
      <div class="row justify-content-center">
        
          <h5> How is this calculated?</h5>
      
          <p>
          Your calculated grade is the sum of all grades multiplied by their respective 
          weights.
      
      
          For example, if my current grade in my homework category is 70% with its weight being 40% of my grade, and my current grade in my tests category is 65% with its weight being 60% of my grade, the grade I have in the class would be (Homework category grade * homework category weight) + (test category grade * test category weight) or (70/100 * 40/100) + (65/100 * 60/100) which would equal to 0.67. Multiply 0.67 by 100 to get to the grade percentage form which is 67.00%
          </p>
        
      </div>
    </div>
  </div>
</div>

    
 
 

</template>

<style>
</style>