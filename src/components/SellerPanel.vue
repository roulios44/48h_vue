<template>
    <h1>Panel commercant</h1>
    <div class="createCategory">
      <h1>Create a category</h1>
      <label for="createCategoryname">CategoryName: </label>
      <input id="createCategoryname" class="text" type="text" v-model="createCategoryName"/>
      <input type="button" value="create Category" v-on:click="createCategory()" />
    </div>
    <div class="createProduct">

      
      <h2>Ajouter produit</h2>

      <label for="image">Image :</label>
      <input id="image" class="text" type="text" v-model="imageURL"/>
      <label for="nom">Nom :</label>
      <input id="nom" class="text" type="text" v-model="name"/>
      <label for="description">Description :</label>
      <textarea id="description" class="text" v-model="description"></textarea>
      <label for="prix">Prix :</label>
      <input id="prix" class="text" type="number" v-model="price"/>
      <label for="stock">Stock :</label>
      <input id="stock" class="text" type="number" v-model="stock"/>
      <label for="categ">Categorie :</label>
        <select name="categ" id="categ" v-model="tmpCategory">
          <option v-for="catego in category" v-bind:value="catego.id">{{ catego.name }}</option>
        </select>
      <input class="panier" type="button" value="Add" v-on:click="createProduct()"/>
    </div>
</template>


<script>
import axios from 'axios'

export default {
  data(){
    return{
      createCategoryName:"",
      category:[],
      imageURL:"",
      name:"",
      description:"",
      price:"",
      stock:"",
      categoryID:"",
      tmpCategory:"",
    }
  },
  methods:{
    async createCategory(){
      const post = await axios.post("http://localhost/48h_back/createCategory.php",JSON.stringify({
        "categoryName":this.createCategoryName,
      }))
      const res = await post.data
      this.getAllCategory()
    },
    async getAllCategory(){
      const req = await axios.get("http://localhost/48h_back/getAllCategory.php")
      const data = await req.data
      this.category = data
    },
    async createProduct(){
      const data = JSON.stringify({
        "name":this.name,
        "description":this.description,
        "price":this.price,
        "stock":this.stock,
        "image":this.imageURL,
        "categoryID":this.categoryID,
        "sellerId":localStorage.getItem("userID"),
      })
      const post = await axios.post("http://localhost/48h_back/addProduct.php",data)
      const res = await post.data
      console.log(res)
    },
  },
  async mounted(){
    console.log(localStorage.getItem("userID"))
    await this.getAllCategory()
  },
  watch:{
    tmpCategory : function(val){
      this.categoryID = val
    },
  }
}
</script>

<style>

.createProduct {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid !important;
    border-radius: 20px !important;
    border-color: white !important;
    width: 30%;
}
.createCategory{
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