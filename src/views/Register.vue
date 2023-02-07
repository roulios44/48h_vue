<template>
    <NavBar />
    <Register />
    <div>
    </div>
</template>


<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue"
import Register from "@/components/Signin.vue"

export default {
  data(){
    return{
      
    }

  },
  methods:{

  },
  components:{
    NavBar,
    Register,
  }
}
</script>

<style>


</style>