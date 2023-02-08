<template>
    <h1>Panel Administrateur</h1>
    <div class="box">
      
      <label for="server">Serveur black-list :</label>
      <span v-for="site in blackList">{{ site.name }}    {{ site.addressIp }}</span>
      <br />
      <h1>BlackList a shop</h1>
      <label>Ip Address</label>
      <input class="panier" type="text" placeholder="Ip Address" v-model="ipToBlackList"/>
      <label>shopName</label>
      <input class="panier" type="text" placeholder="shopName" v-model="nameToBlackList"/>
      <input type="button" v-on:click="addBlackListSite()"/>
    </div>
</template>


<script>
import axios from 'axios';

export default {
  data(){
    return{
      blackList: [],
      ipToBlackList:"",
      nameToBlackList:"",
    }
  },
  methods:{
    async getAllBlackList(){
      const req = await axios.get("http://localhost/48h_back/getAllBlackList.php")
      const data = await req.data
      this.blackList = data
    },
    async addBlackListSite(){
      const post = await axios.post("http://localhost/48h_back/addBlackList.php",JSON.stringify({
        "ip":this.ipToBlackList,
        "name":this.nameToBlackList
      }))
      const res = await post.data
      console.log(res)
      this.getAllBlackList()
    }
  },
  async mounted(){
    await this.getAllBlackList()
  }
}
</script>

<style>

.box {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid !important;
    border-radius: 20px !important;
    border-color: white !important;
    width: 30%;
}

.card .panier{
    width: 80%;
}
</style>