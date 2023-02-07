<template>
    <div>
      <h1>Register</h1>
      <label for="mail">mail :</label>  
      <input id="email" type="text" v-model="email">
      <label for="surname">Surname :</label>  
      <input id="surname" type="text" v-model="surname">
      <label for="name">Name :</label>  
      <input id="name" type="text" v-model="name">
      <label for="password">Password :</label>  
      <input id="password" type="password" v-model="password"/>
      <label for="confPassword">Confirm Password :</label>  
      <input id="confPassword" type="password" v-model="confirmPassword"/>
      <label for="address">Adresse :</label>
      <input id="address" type="text" v-model="address"/>
      <label for="type"></label>
      <select name="type" v-model="type">
        Please select your type of account
        <option>Client</option>
        <option>Seller</option>
      </select>
      <label for="storeName" v-if="typeID==2">Enter your store name</label>
      <input id="storeName" type="text" v-model="storeName" v-if="typeID==2"/>
      <input type="button" value="Sign-in" v-on:click="register()"/>
      <h1>{{ errorMessage }}</h1>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data(){
    return{
      name:"",
      surname:"",
      email:"",
      password:"",
      confirmPassword:"",
      registrationDate:new Date().toJSON().slice(0,10),
      address:"",
      type:"",
      typeID:0,
      storeName:"",
      errorMessage:"",
    }
  },
  methods:{
    async register(){
      if(!this.name||!this.surname||!this.password||!this.email||!this.address||(this.typeID==2 && !this.storeName)){
        this.errorMessage="Please fill all fields ."
      }
      else{
        const temp = this.registrationDate.split("-");
        const to = temp[2] + "-" + temp[1] + "-" + temp[0];
        this.registrationDate = to;
        const post = await axios.post("http://localhost/48h_back/addUser.php",JSON.stringify({
          "name":this.name,
          "surname":this.surname,
          "password":this.password,
          "email":this.email,
          "address":this.address,
          "registrationDate":this.registrationDate,
          "userType":this.typeID,
          "storeName":this.storeName,
        }))
        const res = await post.data
        console.log(typeof(res))
      }
    }
  },
  watch:{
    type : function(val){
      if(val=="Seller")this.typeID = 2
      else{
        this.typeID = 1;
        this.storeName = "";
      } 
    },
    storeName : function(val){
      if(!this.typeID==2){
        this.storeName = "";
      }
    }
  }
}
</script>

<style>
.navbar ul {
    position: fixed;
    list-style-type: none;
    margin: 0;
    top: 0;
    right: 0;
    left: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
.navbar li {
  float: left;
}

.navbar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
</style>