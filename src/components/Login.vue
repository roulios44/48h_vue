<template>
    <div>
      <h1>Login</h1>
      <label for="mail">Adresse mail :</label>  
      <input id="mail" type="text" v-model="email">
      <label for="mdp">Mots de passe :</label>  
      <input id="mdp" type="password" v-model="password"/>
      <input type="button" value="Login" v-on:click="login()"/>
    </div>
</template>


<script>
import axios from 'axios';

export default {
  data(){
    return{
      email:"",
      password:"",
    }

  },
  methods:{
    async login(){
      const req = await axios.post("http://localhost/48h_back/login.php",JSON.stringify({
        "email":this.email,
        "password":this.password,
      }))
      const res = await req.data
      if(res != false){
        if(res[0].commandeId){
          localStorage.setItem("userID",res[0].userId)
          localStorage.setItem("userType",res[0].typeID)
          localStorage.setItem("info",res)
        }else{
          localStorage.setItem("userID",res.userID)
          localStorage.setItem("userType", res.userType)
        }
      }else{
        console.log("bad password")
      }  
    }
  }
}
</script>

<style>


</style>