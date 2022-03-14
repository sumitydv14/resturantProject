<template>
<div class="container mx-auto">
    <div class="flex flex-col justify-center items-center h-screen">
        <img src="../assets/Resturantlogo.jpg" class="img-fluid w-36 h-36 rounded-full mx-auto mb-10" />
        <div class="w-2/5 mx-auto">
            <h1 class="text-5xl font-bold text-black mb-10">Login</h1>
            <input type="email" v-model="email" name="email" placeholder="exemple@gmail.com" class="block h-12 rounded border pl-3 mb-3 w-full" />
            <input type="password" v-model="password" name="password" placeholder="password" class="block h-12 rounded border pl-3 mb-3 w-full" />
            <button v-on:click="login" class="block h-12 rounded border pl-3 mb-3 w-full bg-red-900 text-white">Submit</button>
               
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        async login() {
            const result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
        
        if(result.status==200 && result.data.length > 0){
              localStorage.setItem("user-info", JSON.stringify(result.data[0]) )
              this.$router.push({name:'Home'})
            }
        }
    },
     mounted(){
        const user = localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'Home'})
        }
    }
}
</script>
