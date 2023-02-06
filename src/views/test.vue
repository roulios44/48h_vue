<template>


<header>
    <NavBar/>
  </header>
  <img alt="Vue logo" src="@/assets/baleine.png" style="height: 100px;">
  <HelloWorld msg="Bienvenue sur le site de la Baleine Bleu"/>
  <Login/>
  <Signin/>
  <cardView ></cardView>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'
import Login from '@/components/Login.vue'
import Signin from '@/components/Signin.vue'
import cardView from '@/components/CardViewProduit.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar,
    Login,
    Signin,
    cardView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>