import { createRouter , createWebHistory } from 'vue-router'
import  Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'



const router = createRouter({
    history:createWebHistory(),
    routes:[
      {
          name:'Home',
          component:Home,
          path:'/',
      },
   
      {
       name:'Signup',
       component:Signup,
       path:'/sign-up',
     },

     {
       name:'Login',
       component:Login,
       path:'/login',
     },

     {
         name:'Add',
         component:Add,
         path:'/add',
     },

     {
         name:'Update',
         component:Update,
         path:'/update/:id',
     }
   ]
})

export default router