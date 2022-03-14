<template>
   <div class="container mx-auto">
         <div class="flex flex-col justify-center items-center h-screen">
            <img src="../assets/Resturantlogo.jpg" class="img-fluid w-36 h-36 rounded-full mx-auto mb-10" />
         <div class="w-2/5 mx-auto">
            <h1 class="text-5xl font-bold text-black mb-10">Add Restaurant pages</h1>
             
                  <input type="text" v-model="restaurant.name" name="username" placeholder="Name" class="block h-12 rounded border pl-3 mb-3 w-full" />
                  <input type="text" v-model="restaurant.address" name="address" placeholder="Address" class="block h-12 rounded border pl-3 mb-3 w-full" />
                  <input type="text" v-model="restaurant.contact" name="contact" placeholder="Contact" class="block h-12 rounded border pl-3 mb-3 w-full" />
                  <button v-on:click="addTodata" class="block h-12 rounded border pl-3 mb-3 w-full bg-red-900 text-white" >Add Restaurant</button>
        
         </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Add',
    data(){
        return{
            restaurant:{
            name:'',
            address:'',
            contact:'',
            }
           
        }
    },
    methods:{
      async  addTodata(){
            const result = await axios.post('http://localhost:3000/restaurant',{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact,
            });
             if(result.status==201){
              this.$router.push({name:'Home'})
            }
        }
           

        }
    }



</script>