<template>
    <h1>Panel Administrateur</h1>
    <div class="box">
      
      <label for="server">Serveur à black-list :</label>
        <select name="server" id="server">
            <option value="Ikea">Ikea</option>
            <option value="Ynov">Ynov</option>
            <option value="Tacos">O'Tacos</option>
        </select>
      <input class="panier" type="button" value="Black-list"/>
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