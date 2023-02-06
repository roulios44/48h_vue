<template>
    <div>
      <h1>Sign-in</h1>
      <label for="mail">Adresse mail :</label>  
      <input id="mail" type="text">
      <label for="surname">Prénom :</label>  
      <input id="surname" type="text">
      <label for="name">Nom :</label>  
      <input id="name" type="text">
      <label for="password">Mots de passe :</label>  
      <input id="password" type="password"/>
      <label for="confPassword">Confirmer mots de passe :</label>  
      <input id="confPassword" type="password"/>
      <label for="address">Adresse :</label>  
      <input id="address" type="text"/>
      
      <input type="button" value="Sign-in"/>
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