<template>
    <div class="container mx-auto">
         <div class="flex flex-col justify-center items-center h-screen">
            <img src="../assets/Resturantlogo.jpg" class="img-fluid w-36 h-36 rounded-full mx-auto mb-10" />
         <div class="w-2/5 mx-auto">
            <h1 class="text-5xl font-bold text-black mb-10">Sign Up</h1>
             
                  <input type="text" v-model="name" name="username" placeholder="Please Enter Your Name" class="block h-12 rounded border pl-3 mb-3 w-full" />
                  <input type="email" v-model="email" name="email" placeholder="exemple@gmail.com" class="block h-12 rounded border pl-3 mb-3 w-full" />
                  <input type="password" v-model="password" name="password" placeholder="password" class="block h-12 rounded border pl-3 mb-3 w-full" />
                  <button v-on:click="signUp" class="block h-12 rounded border pl-3 mb-3 w-full bg-red-900 text-white" >Sign Up</button>
            
         </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
     name:'Signup',
     data(){
         return{
                name:'',
                email:'',
                password:'',
         }
     },

     methods:{
        async signUp(){
            
            const result = await axios.post('http://localhost:3000/users',{
                name:this.name,
                email:this.email,
                password:this.password
            });

            

            if(result.status==201){
              localStorage.setItem("user-info", JSON.stringify(result.data) )
              this.$router.push({name:'Login'})
            }
            
     }
    },

    mounted(){
        const user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'Login'})
        }
    }

}
</script>
