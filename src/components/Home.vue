<template>
     <Header />
     <h1 class="mb-10 mt-10">Hello {{this.$store.state.name}} welcome on  Home Page</h1>
     <table class="table-auto mx-auto w-3/5 text-left">
            <thead class="mt-5 h-10 bg-red-900 p-2 text-white">
                <tr>
                <th class="pl-2">Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th class="text-center" >Action</th>
                </tr>
            </thead>
        <tbody>
            <tr v-for="item in allRestaurants" :key="item.id" class="h-14">
             <td class="pl-2">{{item.name}}</td>
             <td>{{item.address}}</td>
             <td>{{item.contact}}</td>
             <td>
                 <div class="flex justify-center">
                     <button class="bg-blue-800 text-white py-2 px-3 rounded mr-5"><router-link :to="'/update/'+ item.id">Edit</router-link></button>
                     <button class="bg-red-900 text-white py-2 px-3 rounded" v-on:click="deleteRestaurant(item.id)">Deleted</button>
                 </div>
            </td>
            </tr>   
        </tbody>
       </table>
      

</template>
<script>
import Header from '@/components/Header'
import { mapGetters , mapActions } from 'vuex'

export default {
    name:'Home',
    components:{
    Header,
  },
    
    methods:{
     ...mapActions(["getRestaurants" , "deleteRestaurant"])
    },

  

computed:mapGetters(["allRestaurants" , "name"]),

created(){
    this.getRestaurants();

},

 mounted(){
      {
      let user = localStorage.getItem('user-info');
       this.$store.state.name = JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({name:"sign-up"});
        }
}

}


   
}
</script>