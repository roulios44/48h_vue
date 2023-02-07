<template>
    <NavBar />
    <signIn />
</template>


<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue"
import signIn from "@/components/Login.vue"

export default {
  data(){
    return{
      
    }

  },
  methods:{

  },
  components:{
    NavBar,
    signIn,
  }
}
</script>

<style>


</style>