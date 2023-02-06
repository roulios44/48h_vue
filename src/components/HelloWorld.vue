<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel provident quae accusamus pariatur, ex, aut eum similique porro reiciendis sapiente molestiae! Maxime numquam totam recusandae ullam placeat sapiente commodi incidunt!<br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, nulla. Aspernatur neque deleniti voluptatem ipsam accusamus. Dolor maiores fuga, dolorem sunt aliquid enim mollitia dignissimos deleniti ipsa beatae nihil perspiciatis?</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
