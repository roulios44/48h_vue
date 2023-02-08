<template>
    <NavBar />
    <div class="card" v-for="article,id in articles">
        <img src="../assets/baleine.png" style="height: 100px;"/> <br> 
        <span>{{ article.name }}</span>
        <span>Remaining: {{ article.stock }}</span>
        <input class="num" type="number" value="0" min="0" :id="id.toString()"/>
        <span>Price: {{ article.price }}</span>
        <span>{{ article.description }}</span>
        <input class="panier" type="button" value="Add to cart" v-on:click="addToCart(id)"/>
    </div>
    <div class="side-menu">
      <h2>Cart</h2>
      <ul>
          <li style="list-style-type: none;" v-for="item in cart"><span style="cursor: pointer;" v-on:click="removeCartElement(item.commandeLigneId)">X</span><br />{{ item.name }} x {{ item.quantity }} unitePrice:{{ item.unitePrice }}</li>
      </ul>
      <p>Total: ${{ totalAmount }}</p>
    </div>
</template>


<script>
import axios from 'axios';
import NavBar from "@/components/NavBar.vue"

export default {
  data(){
    return{
        articles: [],
        cart: [],
        totalAmount: 0,
    }
  },
  methods:{
    async getAllarticles(){
        const post = await axios.get("http://localhost/48h_back/getAllProducts.php")
        const data = await post.data
        this.articles =  data
    },
    async addToCart(id){
        const articleSelected = this.articles[id]
        const number = document.getElementById(id).value
        const data = JSON.stringify({
                "productID":articleSelected.id,
                "quantity":number,
                "unitePrice":articleSelected.price,
                "userId":localStorage.getItem("userID")
            })
        if(number>0){
            const post = await axios.post("http://localhost/48h_back/addToCart.php",data)
            const res = await post.data
            }
        this.getCart()
        },
    async getCart(){
        const post = await axios.post("http://localhost/48h_back/getCart.php",JSON.stringify({
            "userId":localStorage.getItem("userID")
        }))
        const res = await post.data
        localStorage.setItem("info",res)
        this.cart = res
        this.getTotalAmout()
    },
    async getTotalAmout(){
        let total = 0;
        this.cart.forEach(element => {
            total+=(element.unitePrice * element.quantity)
        });
        this.totalAmount = total
    },
    async removeCartElement(idCommandeLigne){
        const post = await axios.post("http://localhost/48h_back/removeCartItem.php",JSON.stringify({
            "commandeLigneId":idCommandeLigne,
        }))
        const rep = await post.data
        this.getCart();

        
    }
    
    },
    async mounted(){
        await this.getAllarticles()
        await this.getCart()
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
.side-menu {
    overflow: scroll;
    max-height: 100%;
    width: 200px;
    background-color: #333;
    padding: 20px;
    position: fixed;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}

@media (max-width: 767px) {
  .side-menu {
    width: 100%;
    position: relative;
    top: initial;
    transform: none;
  }
}

</style>