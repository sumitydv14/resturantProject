import {createStore} from "vuex";
import axios from 'axios';
import router from "../routes";



export default createStore({
    
   state:{
    name:'',
    restaurants:[],
    restaurant:{
                name:'',
                address:'',
                contact:'',
        },
   },

   getters:{
    allRestaurants:(state) =>{
        return state.restaurants
    },
   
   },

  actions:{
       async getRestaurants({commit}){
        const result = await axios.get("http://localhost:3000/restaurant");
        commit("setRestaurants" , result.data);
       
    },
   async deleteRestaurant({commit}, id){
        await axios.delete(`http://localhost:3000/restaurant/${id}`);
       commit("removeRestaurant", id);
   },
   async updateRestaurant({commit, state }, id){
        try{
            const results = await axios.put(`http://localhost:3000/restaurant/${id}`,{
                name:state.restaurant.name,
                address:state.restaurant.address,
                contact:state.restaurant.contact,
            });            
               router.push({name:'Home'})
            commit(results.data);
        }catch{
            console.log("not fount data")
        }  
        
   },
  },
  mutations:{
    setRestaurants:(state ,  restaurants) =>(state.restaurants = restaurants),
    removeRestaurant:(state , id) => state.restaurants = state.restaurants.filter((item) => item.id !== id ),     
},
   modules:{ }
})
