<template>
    <div class="navbar">
        <ul>
            <li><img src="../assets/baleine.png" alt="image baleine bleu" style="height: 50px;" /></li>
            <li><a href="">Baleine bleu </a></li>
            <li><a href="">Produit </a></li>
            <li><a href="">Sign in </a></li>
            <li><a href=""> Log in</a></li>
        </ul>
        
        
        
        
        
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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