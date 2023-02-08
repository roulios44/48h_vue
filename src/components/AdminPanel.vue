<template>
    <h1>Panel Administrateur</h1>
    <div class="listOfIp">
      <label for="server">Serveur available :</label>
      <span v-for="site in available">{{ site.serverIp }}</span>
      <br />
      <h1>Manually add server</h1>
      <label>Ip Address</label>
      <input class="panier" type="text" placeholder="Ip Address" v-model="ipToAdd"/>
      <input type="button" v-on:click="addServer()"/>

    </div>
    <div class="blackList">
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

      available:[],
      ipToAdd:"",
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
      this.getAllBlackList()
    },
    async getAllAvailableIp(){
      const req = await axios.get("http://localhost/48h_back/getAllIp.php")
      const data = await req.data
      this.available = data
    },
    async addServer(){
      console.log(this.ipToAdd)
      const post = await axios.post("http://localhost/48h_back/addIpAvailable.php",JSON.stringify({
        "ip":this.ipToAdd,
      }))
      const res = await post.data
      console.log(res)
      this.getAllAvailableIp()
    }
  },
  async mounted(){
    await this.getAllBlackList()
    await this.getAllAvailableIp()
  }
}
</script>

<style>

.blackList {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid !important;
    border-radius: 20px !important;
    border-color: white !important;
    width: 50%;
    margin: 100px;
}
.listOfIp{
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  border: 3px solid !important;
  border-radius: 20px !important;
  border-color: white !important;
  width: 50%;
  margin: 100px;
}

.card .panier{
    width: 80%;
}
</style>