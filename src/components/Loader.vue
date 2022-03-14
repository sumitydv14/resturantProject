<template>
   <div class="loader-sec flex justify-center w-full">
       <div class="loader  w-12 h-12 rounded-full border-8 border-sky-500"> </div>
   </div> 
</template>

<script>
   export default {
       name:'Loader'
   }
</script>

<style>
  .loader {
  border-top: 8px solid #3498db;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>