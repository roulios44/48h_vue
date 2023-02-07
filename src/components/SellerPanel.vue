<template>
    <h1>Panel commercant</h1>
    <div class="box">
      <h2>Ajouter produit</h2>

      <label for="image">Image :</label>
      <input id="image" class="text" type="file"/>
      <label for="nom">Nom :</label>
      <input id="nom" class="text" type="text"/>
      <label for="description">Description :</label>
      <textarea id="description" class="text"></textarea>
      <label for="prix">Prix :</label>
      <input id="prix" class="text" type="number"/>
      <label for="stock">Stock :</label>
      <input id="stock" class="text" type="number"/>
      <label for="categ">Categorie :</label>
        <select name="categ" id="categ">
            <option value="1">Electronique</option>
            <option value="2">Ménager</option>
            <option value="3">Restauration</option>
        </select>
      <input class="panier" type="button" value="Ajouter"/>
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