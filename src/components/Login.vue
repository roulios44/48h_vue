<template>
    <div>
      <h1>Login</h1>
      <label for="mail">Adresse mail :</label>  
      <input id="mail" type="text">
      <label for="mdp">Mots de passe :</label>  
      <input id="mdp" type="password"/>
      <input type="button" value="Login"/>
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


</style>