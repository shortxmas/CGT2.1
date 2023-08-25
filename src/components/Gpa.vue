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

    const f = ref([ (new input("w1",null)),(new input("w2",null)),
    (new input("w3",null)),(new input("w4",null)),(new input("w5",null)),
    (new input("w6",null)),(new input("w7",null)),(new input("w8",null)),
    (new input("w9",null)),(new input("w10",null)),  ])
    
    let o=null


    return{
      cn,
      g,
      w,
      t,
      f,
      o
      
      
      

    }


  },
  methods:
  {
    calc(x,y)
    {
      let ret=null;
      let div=0;
      for(var i =0;i<x.length;i++)
      {
        if(y[i].val!=null )
        {
          if(x[0].val!=null)
          ret = ret + ((x[i].val) * y[i].val);
          div = div +x[i].val

        }

      }
      return ret/div;


    },
    resetForm(x,y)
    {
      for(var i =0;i<x.length;i++)
      {
        x[i].val=null
        y[i].val=null
      }
    },
    calc2(x)
    {
      let div=0;
      let ret=0;
      for(var i =0;i<x.length;i++)
      {
        if(x[i].val!=null)
        {
          ret=ret+x[i].val;
          div++;
        }
      }
      return ret/div;

    },
    resetForm2(x)
    {
      for(var i =0;i<x.length;i++)
      {
        x[i].val=null
        
      }
    },
    
  }

}

</script>

<template>
  <div class="row justify-content-center">
  <div class=" py-5 col-12 col-lg-6 " >
    
    

      <h3> GPA Calculator </h3>
      <p>
        Calculate your semester or cumulative GPA.      </p>

      <h4> Semester GPA</h4>
      <div class="input-groupinput-group-xs mb-5 ">
        
         <form ref="form">
          <div class="row" >
            <div class="col-6">

              Category name (optional)
              <br>

              <div v-for="name in cn" :key="name">
                
                <input type="text" class="form-control" maxlength="20" :id="name.name" v-model="name.val">
                
              </div>
              

            </div>
            

            <div class="col-3">

              Grade (Letter)
              <br>

              <div v-for="grade in g" :key="grade">
                
                <select id="t" class="form-select" v-model="grade.val" aria-label="Default select example">
                  
                  
                  <option value="4.0">A+</option>
                  <option value="4.0">A</option>
                  <option value="3.7">A-</option>
                  <option value="3.3">B+</option>
                  <option value="3.0">B</option>
                  <option value="2.7">B-</option>
                  <option value="2.3">C+</option>
                  <option value="2">C</option>
                  <option value="1.7">C-</option>
                  <option value="1.3">D+</option>
                  <option value="1">D</option>
                  <option value=".7">D-</option>
                  <option value="0">F</option>
                </select>
                
              </div>
              

            </div>
            



            <div class="col-3">

              Credits Worth
              <br>

              <div v-for="weight in w" :key="weight">
                
                <input type="number" class="form-control" maxlength="7" v-model="weight.val">
                
              </div>
              
              
            </div>
          </div>
          <br>

          <div>
            <div class="row"  readonly >

              <div class="col-5">
                <div class="form-control" readonly style="padding: 10px;">
                   Semester GPA
                   <text style="font-weight: 700; float: right;">
                    {{ t }}
                  </text>
                </div>
                <br>  
              </div>

              
              
            </div>
            
          </div>


          <button type="button" class="btn btn-info"
          @click="t = (calc(w,g)).toFixed(2)">
            Submit
          
          </button>
          <button type="button" @click="

          resetForm(w,g),t=null
          
          
          
          "
            class="btn btn-danger" style="margin-left: 10px;">
            Reset
          </button>
          
          
         </form>
          
      </div>

      <h4> Cumulative GPA</h4>
      <div class=" input-group-xs mb-5 ">
        
         <form ref="form">
          <div class="row" >
            
            

            <div class="col-4">

              Semester GPA
              

              <div v-for="grade in f" :key="grade">
                
                <input type="number" class="form-control" maxlength="7" :id="grade.name" v-model="grade.val">
                
              </div>
              

            </div>
            



            
          </div>
          <br>

          <div>
            <div class="row"  readonly >

              <div class="col-5">
                <div class="form-control" readonly style="padding: 10px;">
                   Cumulative GPA
                   <text style="font-weight: 700; float: right;">
                    {{ o }}
                  </text>
                </div>
                <br>  
              </div>

              
              
            </div>
            
          </div>


          <button type="button" class="btn btn-info"
          @click="o = (calc2(f)).toFixed(2)">
            Submit
          
          </button>
          <button type="button" @click="

          resetForm2(f),o=null
          
          
          
          "
            class="btn btn-danger" style="margin-left: 10px;">
            Reset
          </button>
          
          
         </form>
          
      </div>
      
    
 

  </div>
  <div class="col-12 col-lg-8  py-5 ">
    <div style="text-align: center; line-height: 2;">
      
      <div class="row justify-content-center">
        
          <h5> How is the semester GPA calculated?</h5>
      
          <p> 
            Your calculated semester GPA is the sum of all letter grades multipled by their respective credit worth divided by the total amount of credits worth. Each letter grade corresponds to a certain decimal value which is used to calculate your GPA. A = 4.0, B = 3.0, C = 2.0, D = 1.0, F = 0. If you get a minus grade (ex. B-), take 0.3 away from your corresponding letter grade (B- = 2.7). If you get a plus grade (ex. B+), add 0.3 to your corresponding letter grade (B+ = 3.3). A+ and A will both equal 4.0 and F = 0.

            For example, if I have a B+ in my calculus class with it being worth 4 credits and a C- in my Astronomy class with it being worth 3 credits, my GPA would be calculated by (Calculus letter grade value * calculus credits worth) + (Astronomy letter grade value * astronomy credits worth) all divided by (Calculus credits worth + astronomy credits worth) or ((3.3 * 4) + (1.7 * 3)) / (3+4) which is 2.61.
          </p>
        
      </div>
      <div class="row justify-content-center">
        
        <h5> How is the cumulative GPA calculated?</h5>
    
       <p>
        Your calculated cumulative GPA is simply the average of all of your semester GPAs.

For example, if I got a 2.69 GPA for my first semester, a 3.15 GPA for my second semester, and a 3.85 GPA for my third semester, I would calculate the cumulative GPA by adding all of my semester GPAs and dividing it by the amount of semesters. This would be (2.69 + 3.15 + 3.85) / 3 which would be 3.23.
       </p>
      
    </div>
    </div>
  </div>
</div>

</template>

<style>
</style>