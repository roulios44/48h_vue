<template>
    <NavBar />
    <div class="card" v-for="article in articles">
        <img src="../assets/baleine.png" style="height: 100px;"/> <br> 
        <span>{{ article.name }}</span>
        <input class="num" type="number" value="0" min="0"/>
        <span>{{ article.description }}</span>
        <input class="panier" type="button" value="Ajouter au panier"/>
      </div>
</template>


<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue"

export default {
  data(){
    return{
        articles: []
    }
  },
  methods:{
    async getAllarticles(){
        const post = await axios.get("http://localhost/48h_back/getAllProducts.php")
        const data = await post.data
        this.articles =  data
        console.log(data)
        },
    },
    async mounted(){
        this.getAllarticles()
    },
    components:{
        NavBar,
    }
}
</script>

<style>
.card{
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
}
.card img{
    width: fit-content;
    height: fit-content;
}

</style>