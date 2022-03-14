<template>
     <div class="container mx-auto">
         <div class="flex flex-col justify-center items-center h-screen">
            <img src="../assets/Resturantlogo.jpg" class="img-fluid w-36 h-36 rounded-full mx-auto mb-10" />
         <div class="w-2/5 mx-auto">
            <h1 class="text-5xl font-bold text-black mb-10">Update Restaurant pages</h1>
                  <input type="text" v-model="restaurant.name" name="username" placeholder="Name" class="block h-12 rounded border pl-3 mb-3 w-full" />
                  <input type="text" v-model="restaurant.address" name="address" placeholder="Address" class="block h-12 rounded border pl-3 mb-3 w-full" />
                  <input type="text" v-model="restaurant.contact" name="contact" placeholder="Contact" class="block h-12 rounded border pl-3 mb-3 w-full" />
                  <button v-on:click="updateRestaurant(restaurant.id)" class="block h-12 rounded border pl-3 mb-3 w-full bg-red-900 text-white" >Update Restaurant</button>
         </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import  {mapState , mapActions}  from 'vuex';
export default {
    name:'Update',
        methods:{
                ...mapActions(["updateRestaurant"]),
          },
        computed:{
             ...mapState(["restaurant"])
        },
 async mounted()
    {
        let result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
         this.$store.state.restaurant=result.data  
    },
}
</script>