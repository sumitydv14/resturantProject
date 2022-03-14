<template>
    <nav class="px-10 bg-black text-white">
        <ul class="flex">
            <li class="px-3 h-14 flex items-center text-lg hover:bg-blue-900 mr-3"><router-link to="/">Home</router-link></li>
            <li class="px-3 h-14 flex items-center text-lg hover:bg-blue-900 mr-3"><router-link to="add">Add Restaurant</router-link></li>
            <li class="px-3 h-14 flex items-center text-lg hover:bg-blue-900 mr-3" v-on:click="logout" ><a href="#">Logout</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:'Header',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>