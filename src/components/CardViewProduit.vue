<template>
    <div class="card">
      <img src="../assets/baleine.png" style="height: 100px;"/> <br> 
      <span>Peluche baleine bleu</span>
      <input class="num" type="number" value="0" min="0"/>
      <input class="panier" type="button" value="Ajouter au panier"/>
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

.card {
    border: 3px solid !important;
    border-radius: 20px !important;
    border-color: white !important;
    width: 250px;
}

.card .num {
    width: 35%;
}
.card .panier{
    width: 80%;
}
</style>